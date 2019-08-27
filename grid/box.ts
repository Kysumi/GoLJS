import * as PIXI from "pixi.js";
import Vector from "../lib/vector";
import GridBase from "../base/gridBase";

export default class Box extends GridBase {
	protected _app: PIXI.Application;

	constructor(app: PIXI.Application, tileSize: Vector, gridPos: Vector) {
		// Call inherited constructor
		super();

		this._app = app;

		this.setTileSize(tileSize);
		this.setTilePadding(1);
		this.setGridPosition(gridPos);

   		let logo = PIXI.Sprite.from("/temp/img_grass2_1.png");
	    // logo.anchor.set(0.5);
	    logo.x = this.pixelPosition.x;
		logo.y = this.pixelPosition.y;
		logo.width = 32;
		logo.height = 32;

	    this._app.stage.addChild(logo);

		return this;
	}
}
