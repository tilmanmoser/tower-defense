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
  projectile: Projectile | undefined;

  public constructor(props: {
    context: CanvasRenderingContext2D;
    image: string;
    width: number;
    height: number;
    radius: number;
    position: { x: number; y: number };
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
  }

  public update(intruders: Intruder[]) {
    // get first valid target
    this.target = intruders
      .filter((intruder) => {
        const dist = this.distanceTo(intruder);
        return dist <= intruder.width / 2 + this.radius;
      })
      .pop();

    if (this.target) {
      // orientate towards target
      const deltaX = this.target.position.x - this.position.x;
      const deltaY = this.target.position.y - this.position.y;
      this.angle = Math.atan2(deltaY, deltaX);

      // shoot at target
      if (!this.projectile) {
        this.projectile = new Projectile({
          position: { ...this.position },
          target: this.target,
          speed: 4,
          offset: 46,
          maxDistance: this.radius,
        });
      }
    }

    // update projectile
    if (this.projectile) {
      if (this.projectile.hasHitTarget()) {
        // hit
        this.projectile = undefined;
      } else if (this.projectile.hasMissedTarget()) {
        this.projectile = undefined;
      } else {
        this.projectile.update();
      }
    }

    this.draw();
  }

  private distanceTo(intruder: Intruder) {
    const deltaX = intruder.position.x - this.position.x;
    const deltaY = intruder.position.y - this.position.y;
    const dist = Math.hypot(deltaX, deltaY);
    return dist;
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

    // draw projectile
    if (this.projectile) {
      this.context.drawImage(
        this.image,
        // crop image
        this.width * 2,
        0,
        this.width,
        this.height,
        // relative centered position
        this.projectile.position.x - this.width / 2,
        this.projectile.position.y - this.height / 2,
        this.width,
        this.height
      );
    }

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
}