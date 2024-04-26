import { levels } from "./levels";
import "./style.css";
import TowerDefense from "./towerDefense";

(function () {
  // bind app div
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  // load level data
  const level = levels[0];

  // create canvas
  const canvas = document.createElement("canvas");
  canvas.width = level.tiles.cols * level.tiles.width;
  canvas.height = level.tiles.rows * level.tiles.height;
  canvas.style.maxWidth = `min(${
    canvas.width > canvas.height ? "100vw" : "100vh"
  }, ${canvas.width / 2}px)`;
  canvas.style.maxHeight = `min(${
    canvas.width > canvas.height ? "100vh" : "100vw"
  }, ${canvas.height / 2}px)`;
  canvas.style.aspectRatio = `${canvas.width}/${canvas.height}`;
  app.appendChild(canvas);

  // create context
  const context = canvas.getContext("2d");
  if (!context) return;

  // initialize and run game
  const towerDefense = new TowerDefense({
    context: context,
    level: level,
  });
  (function animate() {
    const handle = requestAnimationFrame(animate);
    towerDefense.update();
    if (towerDefense.isFinished()) cancelAnimationFrame(handle);
  })();
})();
