import { LevelData } from "./levels";
import Intruder from "./units/intruder";
import Turret from "./units/turret";

export default class TowerDefense {
  context: CanvasRenderingContext2D;
  level: LevelData;
  map: HTMLImageElement;
  intruders: Intruder[] = [];
  turrets: Turret[] = [];
  lives: number = 10;
  coins: number = 1000;
  turretToPlaceIndex: number = 0;
  pointerPos: { x: number; y: number } | undefined;
  waveIndex: number = -1;

  public constructor(props: {
    context: CanvasRenderingContext2D;
    level: LevelData;
  }) {
    this.context = props.context;
    this.level = props.level;

    // create map image
    this.map = new Image();
    this.map.src = this.level.map;

    // eventlistener
    this.context.canvas.addEventListener("pointermove", (ev) =>
      this.onPointerMove(ev)
    );
    this.context.canvas.addEventListener("pointerout", (ev) =>
      this.onPointerOut(ev)
    );
    this.context.canvas.addEventListener("pointerdown", (ev) =>
      this.onPointerDown(ev)
    );
  }

  public update() {
    this.drawMap();
    this.updateTurrets();
    this.updateIntruders();
    this.drawPointer();
  }

  public isFinished() {
    return (
      this.lives <= 0 ||
      (this.waveIndex === this.level.waves.length - 1 &&
        this.intruders.length === 0)
    );
  }

  private drawMap() {
    this.context.drawImage(
      this.map,
      0,
      0,
      this.level.tiles.cols * this.level.tiles.width,
      this.level.tiles.rows * this.level.tiles.height
    );
  }

  private updateTurrets() {
    for (let i = this.turrets.length - 1; i >= 0; i--) {
      const turret = this.turrets[i];
      turret.update(this.intruders);
    }
  }

  private updateIntruders() {
    this.intruders
      .sort((a, b) => a.position.y - b.position.y)
      .sort((a, b) => (a.air ? (b.air ? 0 : -1) : 1));
    for (let i = this.intruders.length - 1; i >= 0; i--) {
      const intruder = this.intruders[i];
      if (intruder.health <= 0) {
        this.coins += intruder.revenue;
        this.intruders.splice(i, 1);
      } else {
        intruder.update();
        if (intruder.hasReachedLastWaypoint) {
          this.intruders.splice(i, 1);
          this.lives--;
        }
      }
    }

    // create new wave
    if (
      this.intruders.length === 0 &&
      this.waveIndex < this.level.waves.length - 1
    ) {
      const wave = this.level.waves[++this.waveIndex];
      wave.forEach((intruderIndex, count) => {
        const intruderProps = { ...this.level.intruders[intruderIndex] };

        let waypoints = this.level.waypoints[intruderProps.waypointsIndex].map(
          (p) => ({
            x: p.x < 0 ? p.x - this.level.tiles.width * count : p.x,
            y: p.y < 0 ? p.y - this.level.tiles.height * count : p.y,
          })
        );

        if (intruderProps.air) {
          const randX =
            (Math.floor(Math.random() * this.level.tiles.cols) + 0.5) *
            this.level.tiles.width;
          const randY =
            (Math.floor(Math.random() * this.level.tiles.rows) + 0.5) *
            this.level.tiles.height;
          waypoints = waypoints.map((p) => ({
            x: p.x === 0 ? randX : p.x,
            y: p.y === 0 ? randY : p.y,
          }));
        }
        this.intruders.push(
          new Intruder({
            context: this.context,
            ...intruderProps,
            waypoints: waypoints,
          })
        );
      });
      console.log(this.intruders);
    }
  }

  private onPointerMove(ev: PointerEvent) {
    // calculate tile pointed at
    const canvas = this.context.canvas;
    const boundingRect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;
    const relativeX = (ev.clientX - boundingRect.left) * scaleX;
    const relativeY = (ev.clientY - boundingRect.top) * scaleY;
    const centerX =
      (Math.floor(relativeX / this.level.tiles.width) + 0.5) *
      this.level.tiles.width;
    const centerY =
      (Math.floor(relativeY / this.level.tiles.height) + 0.5) *
      this.level.tiles.height;
    this.pointerPos = { x: centerX, y: centerY };
  }

  private onPointerDown(ev: PointerEvent) {
    if (
      ev.button === 0 &&
      this.pointerPos &&
      this.canPlaceTurretAt(this.pointerPos) &&
      this.coins - this.level.turrets[this.turretToPlaceIndex].cost >= 0
    ) {
      this.coins -= this.level.turrets[this.turretToPlaceIndex].cost;
      this.turrets.push(
        new Turret({
          context: this.context,
          ...this.level.turrets[this.turretToPlaceIndex],
          position: this.pointerPos,
        })
      );
    }
  }

  private onPointerOut(ev: PointerEvent) {
    this.pointerPos = undefined;
  }

  private drawPointer() {
    if (this.pointerPos) {
      this.context.fillStyle = this.canPlaceTurretAt(this.pointerPos)
        ? this.coins >= this.level.turrets[this.turretToPlaceIndex].cost
          ? `rgba(0,128,255,0.25)`
          : `rgba(0,0,0,0.10)`
        : `rgba(255,0,0,0.25)`;
      this.context.beginPath();
      this.context.arc(
        this.pointerPos.x,
        this.pointerPos.y,
        this.level.turrets[this.turretToPlaceIndex].radius,
        0,
        2 * Math.PI
      );
      this.context.fill();
      this.context.fillRect(
        this.pointerPos.x - this.level.tiles.width / 2,
        this.pointerPos.y - this.level.tiles.height / 2,
        this.level.tiles.width,
        this.level.tiles.height
      );
    }
  }

  private canPlaceTurretAt(pos: { x: number; y: number }) {
    const tileIndex =
      Math.floor(pos.y / this.level.tiles.height) * this.level.tiles.cols +
      Math.floor(pos.x / this.level.tiles.width);
    let placable = true;
    this.level.restrictedTiles.forEach((tiles) => {
      if (
        tileIndex > -1 &&
        tileIndex < tiles.length &&
        tiles[tileIndex] !== 0
      ) {
        placable = false;
        return;
      }
    });
    this.turrets.forEach((turret) => {
      if (turret.position.x === pos.x && turret.position.y === pos.y) {
        placable = false;
        return;
      }
    });
    return placable;
  }
}
