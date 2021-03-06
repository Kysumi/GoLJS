import Game from "./lib/game";
import * as PIXI from "pixi.js";

window.addEventListener("DOMContentLoaded", initGame);

function removeExistingGame(): void {
  const els = document.body.children;
  if (els.length > 0) {
    document.body.removeChild(els.item(0) as Node);
  }
}

function init(): PIXI.Application {
  removeExistingGame();
  const app = new PIXI.Application(100, 100, {
    backgroundColor: 0x1099bb
  });
  document.body.appendChild(app.view);
  return app;
}

function initGame(): void {
  const app = init();
  const game = new Game(app);
}

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(function accept() {
    initGame();
  });
}
