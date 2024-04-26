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
    stats.innerHTML = `<span style="color: red">&#9829;</span> ${
      towerDefense.lives
    } &nbsp; <span style="color: gold">&#x1F4B0;</span> ${
      towerDefense.coins
    } &nbsp; <span style="color: blue">&#x1F30A;</span> ${
      towerDefense.waveIndex + 1
    }/${level.waves.length}`;
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

  // display turret selection
  const sidebar = document.createElement("div");
  sidebar.classList.add("game-sidebar");
  app.appendChild(sidebar);

  for (let i = 0; i < level.turrets.length; i++) {
    const turret = level.turrets[i];

    const entry = document.createElement("div");
    entry.classList.add("entry");
    const icon = new Image();
    icon.src = turret.icon;
    entry.appendChild(icon);

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = `&#x1F4B0; ${turret.cost} &#x1F525; ${
      turret.projectiles.damage
    } ${turret.projectiles.air ? "&#9992" : ""}`;
    entry.appendChild(description);

    entry.onclick = () => {
      towerDefense.turretToPlaceIndex = i;
    };
    sidebar.appendChild(entry);
  }

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
