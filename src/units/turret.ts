import Intruder from "./intruder";
import Projectile from "./projectile";

export default class Turret {
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  width: number;
  height: number;
  radius: number;
  angle: number;
  position: { x: number; y: number };
  target: Intruder | undefined;
  projectiles: {
    speed: number;
    offset: number;
    damage: number;
    reloading: number;
    air: boolean;
    slow: number;
  };
  projectile: Projectile | undefined;
  reloading!: number;
  audio: { launch: string; hit: string } | undefined;

  public constructor(props: {
    context: CanvasRenderingContext2D;
    image: string;
    width: number;
    height: number;
    radius: number;
    position: { x: number; y: number };
    projectiles: {
      speed: number;
      offset: number;
      damage: number;
      reloading: number;
      air: boolean;
      slow: number;
    };
    audio?: {
      launch: string;
      hit: string;
    };
  }) {
    // rendering
    this.context = props.context;
    this.image = new Image();
    this.image.src = props.image;
    this.position = props.position;
    this.width = props.width;
    this.height = props.height;
    this.radius = props.radius;
    this.angle = 0;
    // shooting
    this.projectiles = props.projectiles;
    this.projectile = undefined;
    this.reloading = 0;
    this.audio = props.audio;
  }

  public update(intruders: Intruder[]) {
    // get first valid target
    this.target = intruders
      .filter(
        (intruder) =>
          intruder.getCenter().x > 0 &&
          intruder.getCenter().y > 0 &&
          intruder.air === this.projectiles.air &&
          this.distanceTo(intruder) <= intruder.width / 2 + this.radius
      )
      .sort((a, b) => this.distanceTo(a) - this.distanceTo(b))[0];

    if (this.target) {
      // orientate towards target
      const deltaX = this.target.position.x - this.position.x;
      const deltaY = this.target.position.y - this.position.y;
      this.angle = Math.atan2(deltaY, deltaX);

      // shoot at target
      if (!this.projectile) {
        if (this.reloading < 0) {
          this.reloading++;
        } else {
          this.projectile = new Projectile({
            position: { ...this.position },
            target: this.target,
            maxDistance: this.radius,
            ...this.projectiles,
          });
          if (this.audio) {
            const sound = new Audio(this.audio.launch);
            sound.play();
          }
        }
      }
    }
    this.draw();
  }

  private draw() {
    // draw base
    this.context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      this.width,
      this.height
    );

    // draw gun
    this.context.save();
    this.context.setTransform(1, 0, 0, 1, this.position.x, this.position.y);
    this.context.rotate(this.angle);
    this.context.drawImage(
      this.image,
      // crop image
      this.width,
      0,
      this.width,
      this.height,
      // relative centered position
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    this.context.restore();
  }

  public updateProjectile() {
    // update projectile
    if (this.projectile) {
      if (this.projectile.hasHitTarget()) {
        this.projectile.target.health -= this.projectiles.damage;
        this.projectile.target.speed = Math.max(
          0.51,
          this.projectile.target.speed + this.projectiles.slow
        );

        this.projectile = undefined;
        this.reloading = -this.projectiles.reloading;
        if (this.audio) {
          const sound = new Audio(this.audio.hit);
          sound.play();
        }
      } else if (this.projectile.hasMissedTarget()) {
        this.projectile = undefined;
        this.reloading = -this.projectiles.reloading;
      } else {
        this.projectile.update();
      }
    }
    this.drawProjectile();
  }

  private drawProjectile() {
    // draw projectile
    if (this.projectile) {
      this.context.save();
      this.context.setTransform(
        1,
        0,
        0,
        1,
        this.projectile.position.x,
        this.projectile.position.y
      );
      this.context.rotate(this.projectile.angle);
      this.context.drawImage(
        this.image,
        // crop image
        this.width * 2,
        0,
        this.width,
        this.height,
        // relative centered position
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height
      );
      this.context.restore();
    }
  }

  private distanceTo(intruder: Intruder) {
    const deltaX = intruder.getCenter().x - this.position.x;
    const deltaY = intruder.getCenter().y - this.position.y;
    const dist = Math.hypot(deltaX, deltaY);
    return dist;
  }
}
