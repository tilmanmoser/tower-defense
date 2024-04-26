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
    this.target = intruders
      .filter((intruder) => {
        const deltaX = intruder.position.x - this.position.x;
        const deltaY = intruder.position.y - this.position.y;
        const dist = Math.hypot(deltaX, deltaY);
        return dist <= intruder.width / 2 + this.radius;
      })
      .pop();

    if (this.target) {
      const deltaX = this.target.position.x - this.position.x;
      const deltaY = this.target.position.y - this.position.y;
      this.angle = Math.atan2(deltaY, deltaX);
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
}
