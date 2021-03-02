import { box } from "./modules/boxOps.js";

box.create();
requestAnimationFrame(game);
let startTime = performance.now();

function game(timer) {
  if (timer - startTime > 300) {
    box.moveDown();
    startTime = timer;
  } else {
    //do nothing
  }
  requestAnimationFrame(game);
}

document.addEventListener("keydown", function moveRightOrLeft(event) {
  const key = event.key;
  switch (key) {
    case "ArrowLeft":
      box.moveLeft();
      break;
    case "ArrowRight":
      box.moveRight();
      break;
  }
});
