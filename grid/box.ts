import * as PIXI from "pixi.js";

export default class Box {
	protected _app: PIXI.Application;
	protected sizeX: number;
	protected sizeY: number;
	protected padding: number = 0;

	constructor(app: PIXI.Application, x: number, y: number) {
		this._app = app;
		this.sizeX = x;
		this.sizeY = y;
	}

	setPadding(amount: number) {
		this.padding = amount;
	}

	renderGrid() {}
}
