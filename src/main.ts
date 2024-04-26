import { levels } from "./levels";
import TowerDefense from "./towerDefense";
import "@fontsource/vt323";
import "./style.css";

(function () {
  // set level data
  const level = levels[0];

  // bind app div
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

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

  // initialize game
  const towerDefense = new TowerDefense({
    context: context,
    level: level,
  });

  // display game stats
  const stats = document.createElement("div");
  stats.classList.add("game-stats");
  app.appendChild(stats);

  const updateGameStats = () => {
    stats.innerHTML = `<span style="color: red">&#9829;</span> ${towerDefense.lives} &nbsp; <span style="color: gold">&#x1F4B0;</span> ${towerDefense.coins}`;
  };

  // display end screen
  const overlay = document.createElement("div");
  overlay.classList.add("game-overlay");
  overlay.innerHTML = "Game Over";
  app.appendChild(overlay);

  const showOverlay = () => {
    overlay.innerHTML =
      towerDefense.lives > 0 ? "Congratulations!" : "Game Over!";
    overlay.style.display = "flex";
  };

  // run game
  (function animate() {
    const handle = requestAnimationFrame(animate);
    towerDefense.update();
    updateGameStats();
    if (towerDefense.isFinished()) {
      cancelAnimationFrame(handle);
      showOverlay();
    }
  })();
})();
