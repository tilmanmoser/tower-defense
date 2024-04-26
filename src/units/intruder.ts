export default class Intruder {
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  width: number;
  height: number;
  framesIndex: number;
  framesCount: number;
  framesElapsed: number;
  speed: number;
  angle: number;
  path: { x: number; y: number }[];
  pathIndex: number;
  position: { x: number; y: number };
  hasReachedLastWaypoint: boolean;

  public constructor(props: {
    context: CanvasRenderingContext2D;
    image: string;
    width: number;
    height: number;
    frames: number;
    speed: number;
    path: { x: number; y: number }[];
  }) {
    // render attributes
    this.context = props.context;
    this.image = new Image();
    this.image.src = props.image;
    this.width = props.width;
    this.height = props.height;
    this.framesCount = props.frames;
    this.framesIndex = 0;
    this.framesElapsed = 0;

    // movement attributes
    this.path = props.path;
    this.position = { ...this.path[0] };
    this.pathIndex = 0;
    this.hasReachedLastWaypoint = false;
    this.speed = props.speed;
    this.angle = 0;
  }

  public update() {
    const target = this.path[this.pathIndex];
    // orientate and move towards target
    const deltaX = target.x - this.position.x;
    const deltaY = target.y - this.position.y;
    this.angle = Math.atan2(deltaY, deltaX);
    this.position.x += Math.round(Math.cos(this.angle) * this.speed);
    this.position.y += Math.round(Math.sin(this.angle) * this.speed);

    // has reached waypoint?
    if (
      Math.abs(target.x - this.position.x) <= this.speed &&
      Math.abs(target.y - this.position.y) <= this.speed
    ) {
      if (this.pathIndex < this.path.length - 1) this.pathIndex++;
      else this.hasReachedLastWaypoint = true;
    }

    this.draw();
  }

  private draw() {
    // update frame
    if (++this.framesElapsed % Math.ceil(30 / this.framesCount) === 0) {
      this.framesElapsed = 0;
      this.framesIndex = (this.framesIndex + 1) % this.framesCount;
    }
    // draw rotated image
    this.context.save();
    this.context.setTransform(1, 0, 0, 1, this.position.x, this.position.y);
    this.context.rotate(this.angle);
    this.context.drawImage(
      this.image,
      // crop image
      this.framesIndex * this.width,
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
