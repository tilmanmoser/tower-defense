import { LevelData } from "./levels";
import Intruder from "./units/intruder";

export default class TowerDefense {
  context: CanvasRenderingContext2D;
  level: LevelData;
  map: HTMLImageElement;
  intruders: Intruder[];

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
  }

  public update() {
    this.drawMap();
    this.updateIntruders();
  }

  public isFinished() {
    return false;
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
      }
    }

    // create new wave
    if (this.intruders.length === 0) {
      this.intruders.push(
        new Intruder({
          context: this.context,
          ...this.level.intruders[0],
          path: this.level.paths[this.level.intruders[0].pathIndex].map(
            (p) => p
          ),
        })
      );
    }
  }
}
