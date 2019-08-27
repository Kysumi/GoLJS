import GridObject from "../base/gridObject";
import Vector from "../lib/vector";

export default class BiomeTile extends GridObject {
  constructor(tileSize: Vector, gridPos: Vector) {
    // Call inherited constructor
    super();

    this.setTileSize(tileSize);
    // TODO Remove
    this.setTilePadding(1);
    this.setGridPosition(gridPos);

    return this;
  }
}
