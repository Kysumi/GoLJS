import * as PIXI from "pixi.js";
import pixiLogoUrl from "./pixijs-logo.url";
import Grid from "../grid/grid"

export default class Game {
  private _app: PIXI.Application;
  protected _grid: Grid;

  constructor(app: PIXI.Application) {
    this._app = app;
  }

  temp(): void {
    let logo = PIXI.Sprite.from(pixiLogoUrl);

    //const logo = P.Sprite.fromImage(pixiLogoUrl)
    logo.anchor.set(0.5);
    logo.x = this._app.screen.width / 2;
    logo.y = this._app.screen.height / 2;

    this._app.stage.addChild(logo);
    this._app.ticker.add((delta: number) => {
      logo.rotation += 0.05 * delta;
      logo.skew.x += 0.01 * delta;
      logo.skew.y += 0.01 * delta;
    });
  }

  start(): void {
    this._grid = new Grid(this._app, 32,32);

    // const loader = PIXI.Loader.shared;

    // loader.add('person', '/assets/images/img_person_0.png').load(this.temp());

    // this.temp();
  }
}
