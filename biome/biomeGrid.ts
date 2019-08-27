import BiomeTile from "./biomeTile";
import Vector from "../lib/vector";

export default class BiomeGrid {
  protected _app: PIXI.Application;
  protected sizeX: number;
  protected sizeY: number;
  protected padding: number = 0;
  protected tileSize: number = 32;
  protected grid: BiomeTile[][];

  constructor(app: PIXI.Application, x: number, y: number) {
    this._app = app;
    this.sizeX = x;
    this.sizeY = y;
    this.grid = [];
  }

  /**
   * Default the grid to a new set of boxes
   */
  public initGrid() {
    for (var x = 0; x < this.sizeX; x++) {
      for (var y = 0; y < this.sizeY; ++y) {
        this.grid[x] = [];
        this.grid[x][y] = new BiomeTile(
          new Vector(this.tileSize, this.tileSize),
          new Vector(x, y)
        );
      }
    }
  }

  setPadding(amount: number): BiomeGrid {
    this.padding = amount;

    return this;
  }

  setTileSize(size: number): BiomeGrid {
    this.tileSize = size;

    return this;
  }
}
