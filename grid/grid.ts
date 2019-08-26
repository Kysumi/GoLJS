import * as PIXI from "pixi.js";

export default class Grid {
    protected _app: PIXI.Application;
    protected sizeX: number;
    protected sizeY: number;
    protected padding: number = 0;
    protected tileSize: number = 32;

    constructor(app: PIXI.Application, x: number, y: number) {
        this._app = app;
        this.sizeX = x;
        this.sizeY = y;
    }

    setPadding(amount: number): Grid {
        this.padding = amount;

        return this;
    }

    setTileSize(size: number): Grid {
        this.tileSize = size;

        return this;
    }

    renderGrid() {}
}
