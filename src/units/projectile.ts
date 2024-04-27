import Intruder from "./intruder";

export default class Projectile {
  turretPosition: { x: number; y: number };
  position: { x: number; y: number };
  target: Intruder;
  speed: number;
  maxDistance: number;
  angle: number;

  constructor(props: {
    position: { x: number; y: number };
    offset: number;
    speed: number;
    maxDistance: number;
    target: Intruder;
  }) {
    this.position = { ...props.position };
    this.turretPosition = { ...props.position };
    this.maxDistance = props.maxDistance;
    this.target = props.target;
    this.speed = props.offset;
    this.update();
    this.speed = props.speed;
    this.angle = 0;
  }

  public update() {
    this.angle = Math.atan2(
      this.target.getCenter().y - this.position.y,
      this.target.getCenter().x - this.position.x
    );

    const velocity = {
      x: Math.cos(this.angle) * this.speed,
      y: Math.sin(this.angle) * this.speed,
    };

    this.position.x += velocity.x;
    this.position.y += velocity.y;
  }

  public hasHitTarget() {
    return (
      Math.abs(this.target.getCenter().x - this.position.x) <= this.speed &&
      Math.abs(this.target.getCenter().y - this.position.y) <= this.speed
    );
  }

  public hasMissedTarget() {
    const deltaX = this.position.x - this.turretPosition.x;
    const deltaY = this.position.y - this.turretPosition.y;
    const distance = Math.hypot(deltaX, deltaY);
    return distance > this.maxDistance;
  }
}
