import * as PIXI from "pixi.js";
import Grid from "../grid/grid";
import Key from "../base/input/key";

export default class Game {
  private _app: PIXI.Application;
  protected _grid: Grid;

  constructor(app: PIXI.Application) {
    this._app = app;

    this._grid = new Grid(this._app, 10, 10);
    this._grid.initGrid();

    let test = new Key("r");
    test.setDownEvent(() => {
      console.log("UMMMMM");
    });

    test.setHeldEvent(() => {
      console.log("im being held!! ahh");
    });

    test.register();

    let testTwo = new Key("e");
    testTwo.setDownEvent(() => {
      console.log("asdasdaasd");
    });

    testTwo.setHeldEvent(() => {
      console.log("123123123");
    });

    testTwo.register();
  }

  temp(): void {
    // let logo = PIXI.Sprite.from(pixiLogoUrl);
    // //const logo = P.Sprite.fromImage(pixiLogoUrl)
    // logo.anchor.set(0.5);
    // logo.x = this._app.screen.width / 2;
    // logo.y = this._app.screen.height / 2;
    // this._app.stage.addChild(logo);
    // this._app.ticker.add((delta: number) => {
    //   logo.rotation += 0.05 * delta;
    //   logo.skew.x += 0.01 * delta;
    //   logo.skew.y += 0.01 * delta;
    // });
  }
}
