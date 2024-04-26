import { LevelData } from "./levels";

export default class TowerDefense {
  context: CanvasRenderingContext2D;
  level: LevelData;
  map: HTMLImageElement;

  public constructor(props: {
    context: CanvasRenderingContext2D;
    level: LevelData;
  }) {
    this.context = props.context;
    this.level = props.level;

    // create map image
    this.map = new Image();
    this.map.src = this.level.map;
  }

  public update() {
    this.drawMap();
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
}
