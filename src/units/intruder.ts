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
  waypoints: { x: number; y: number }[];
  waypointsIndex: number;
  position: { x: number; y: number };
  hasReachedLastWaypoint: boolean;
  health: number;
  maxHealth: number;
  revenue: number;
  framesDuration: number;
  shadow?: number;
  air: boolean | undefined;
  offset: { x: number; y: number };

  public constructor(props: {
    context: CanvasRenderingContext2D;
    image: string;
    width: number;
    height: number;
    frames: number;
    duration: number;
    speed: number;
    waypoints: { x: number; y: number }[];
    health: number;
    revenue: number;
    air?: boolean;
    shadow?: number;
  }) {
    // render attributes
    this.context = props.context;
    this.image = new Image();
    this.image.src = props.image;
    this.width = props.width;
    this.height = props.height;
    this.framesCount = props.frames;
    this.framesIndex = 0;
    this.framesDuration = props.duration;
    this.framesElapsed = 0;
    this.maxHealth = props.health;
    this.health = props.health;
    this.revenue = props.revenue;
    this.shadow = props.shadow;

    // movement attributes
    this.waypoints = props.waypoints;
    this.waypointsIndex = 0;
    this.position = { ...this.waypoints[0] };
    this.offset = {
      x: -this.width / 4 + Math.round((Math.random() * this.width) / 2),
      y: -this.height / 4 + Math.round((Math.random() * this.height) / 2),
    };
    this.hasReachedLastWaypoint = false;
    this.speed = props.speed;
    this.angle = 0;
    this.air = props.air;
  }

  public getCenter() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
    };
  }

  public update() {
    const target = this.waypoints[this.waypointsIndex];
    // orientate and move towards target
    const deltaX = target.x - this.position.x;
    const deltaY = target.y - this.position.y;
    this.angle = Math.atan2(deltaY, deltaX);
    this.position.x += Math.cos(this.angle) * this.speed;
    this.position.y += Math.sin(this.angle) * this.speed;

    // has reached waypoint?
    if (
      Math.abs(target.x - this.position.x) <= this.speed &&
      Math.abs(target.y - this.position.y) <= this.speed
    ) {
      if (this.waypointsIndex < this.waypoints.length - 1)
        this.waypointsIndex++;
      else this.hasReachedLastWaypoint = true;
    }

    this.draw();
  }

  private draw() {
    // update frame
    if (++this.framesElapsed % this.framesDuration === 0) {
      this.framesElapsed = 0;
      this.framesIndex = (this.framesIndex + 1) % this.framesCount;
    }
    // draw rotated image
    this.context.save();
    this.context.setTransform(
      1,
      0,
      0,
      1,
      this.position.x + this.offset.x,
      this.position.y + this.offset.y
    );
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
    if (this.shadow) {
      this.context.drawImage(
        this.image,
        // crop image
        this.shadow * this.width,
        0,
        this.width,
        this.height,
        // relative centered position
        this.width * 0.25,
        this.height * 0.25,
        this.width,
        this.height
      );
    }
    this.context.restore();

    this.context.fillStyle = "red";
    this.context.fillRect(
      this.position.x + this.offset.x - this.width / 2,
      this.position.y + this.offset.y - this.width / 2,
      this.width,
      5
    );

    this.context.fillStyle = "green";
    this.context.fillRect(
      this.position.x + this.offset.x - this.width / 2,
      this.position.y + this.offset.y - this.width / 2,
      (this.width / this.maxHealth) * Math.max(0, this.health),
      5
    );
  }
}
