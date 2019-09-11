import * as PIXI from "pixi.js";
import Tile from "./tile";
import Vector from "../lib/vector";

export default class Grid {
  protected _app: PIXI.Application;
  protected sizeX: number;
  protected sizeY: number;
  protected padding: number = 0;
  protected tileSize: number = 32;
  protected grid: Tile[][];

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
        this.grid[x][y] = new Tile(
          this._app,
          new Vector(this.tileSize, this.tileSize),
          new Vector(x, y)
        );
      }
    }
  }

  public setPadding(amount: number): Grid {
    this.padding = amount;

    return this;
  }

  public setTileSize(size: number): Grid {
    this.tileSize = size;

    return this;
  }
}
