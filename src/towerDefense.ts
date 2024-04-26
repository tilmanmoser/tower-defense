import { LevelData } from "./levels";
import Intruder from "./units/intruder";

export default class TowerDefense {
  context: CanvasRenderingContext2D;
  level: LevelData;
  map: HTMLImageElement;
  intruders: Intruder[];
  lives: number;
  coins: number;
  currentTilePointer: { x: number; y: number } | undefined;

  public constructor(props: {
    context: CanvasRenderingContext2D;
    level: LevelData;
  }) {
    this.context = props.context;
    this.level = props.level;

    // create map image
    this.map = new Image();
    this.map.src = this.level.map;

    // game objects
    this.intruders = [];

    // game vars
    this.lives = 10;
    this.coins = 100;

    // eventlistener
    this.context.canvas.addEventListener("pointermove", (ev) =>
      this.onPointerMove(ev)
    );
    this.context.canvas.addEventListener("pointerout", (ev) =>
      this.onPointerOut(ev)
    );
  }

  public update() {
    this.drawMap();
    this.updateIntruders();
    this.drawSelectedTile();
  }

  public isFinished() {
    return this.lives <= 0;
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

  private updateIntruders() {
    // update each intruder
    for (let i = this.intruders.length - 1; i >= 0; i--) {
      const intruder = this.intruders[i];
      intruder.update();
      if (intruder.hasReachedLastWaypoint) {
        this.intruders.splice(i, 1);
        this.lives--;
      }
    }

    // create new wave
    if (this.intruders.length === 0) {
      this.intruders.push(
        new Intruder({
          context: this.context,
          ...this.level.intruders[0],
          waypoints: this.level.waypoints[
            this.level.intruders[0].waypointsIndex
          ].map((p) => p),
        })
      );
    }
  }

  private drawSelectedTile() {
    if (this.currentTilePointer) {
      this.context.fillStyle = `rgba(255,255,255,.5)`;
      this.context.fillRect(
        this.currentTilePointer.x * this.level.tiles.width,
        this.currentTilePointer.y * this.level.tiles.height,
        this.level.tiles.width,
        this.level.tiles.height
      );
    }
  }

  private onPointerMove(ev: PointerEvent) {
    // calculate selected tile
    const canvas = this.context.canvas;
    const boundingRect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;
    this.currentTilePointer = {
      x: Math.floor(
        ((ev.clientX - boundingRect.left) * scaleX) / this.level.tiles.width
      ),
      y: Math.floor(
        ((ev.clientY - boundingRect.top) * scaleY) / this.level.tiles.height
      ),
    };
  }

  private onPointerOut(ev: PointerEvent) {
    this.currentTilePointer = undefined;
  }
}
