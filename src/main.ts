import { levels } from "./levels";
import TowerDefense from "./towerDefense";
import "@fontsource/zen-dots";
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

  // create context
  const context = canvas.getContext("2d");
  if (!context) return;

  // initialize game
  const towerDefense = new TowerDefense({
    context: context,
    level: level,
  });

  // playfield (canvas & overlay)
  const playfield = document.createElement("div");
  playfield.classList.add("playfield");
  playfield.appendChild(canvas);
  app.appendChild(playfield);

  // ame stats
  const stats = document.createElement("div");
  stats.classList.add("stats");
  playfield.appendChild(stats);

  const updateGameStats = () => {
    stats.innerHTML = `<span style="color: red">&#9829;</span> ${
      towerDefense.lives
    } &nbsp; <span style="color: gold">&#x1F4B0;</span> ${
      towerDefense.coins
    } &nbsp; <span style="color: blue">&#x1F30A;</span> ${
      towerDefense.waveIndex + 1
    }/${level.waves.length}`;
  };

  // end screen
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  playfield.appendChild(overlay);

  const showOverlay = () => {
    overlay.innerHTML =
      towerDefense.lives > 0 ? "Congratulations!" : "Game Over!";
    overlay.style.display = "flex";
  };

  // sidebar (turrets to place)
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  app.appendChild(sidebar);

  for (let i = 0; i < level.turrets.length; i++) {
    const turret = level.turrets[i];

    const item = document.createElement("div");
    item.id = `turret-${i}`;
    item.classList.add("turret");
    if (i == 0) item.classList.add("current");

    const icon = new Image();
    icon.src = turret.icon;
    item.appendChild(icon);

    const description = document.createElement("ul");
    description.innerHTML = `
      <li>&#x1F4B0; ${turret.cost}</li>
      <li>&#x1F525; ${turret.projectiles.damage}</li>
      <li>${turret.projectiles.air ? "anti air" : ""}</li>
    `;
    item.appendChild(description);

    item.onclick = () => {
      towerDefense.turretToPlaceIndex = i;
      document
        .querySelectorAll(".turret")
        .forEach((t) => t.classList.remove("current"));
      document.querySelector(`#turret-${i}`)?.classList.add("current");
    };
    sidebar.appendChild(item);
  }

  // resize canvas on window resize
  const onResize = () => {
    const rect = document.body.getBoundingClientRect();
    const scaleX =
      (rect.width - sidebar.getBoundingClientRect().width) / canvas.width;
    const scaleY = rect.height / canvas.height;
    canvas.style.width = `${canvas.width * Math.min(scaleX, scaleY)}px`;
    canvas.style.height = `${canvas.height * Math.min(scaleX, scaleY)}px`;
  };
  onResize();
  window.onresize = () => onResize();

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
