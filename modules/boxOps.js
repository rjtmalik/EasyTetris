export const box = (function boxOperations() {
  let pillars = {};
  let currentBox;

  const canvas = document.querySelector("#myCanvas");
  const canvasContext = canvas.getContext("2d");

  function create() {
    currentBox = {
      color: "#05EFFF",
      width: 10,
      height: 10,
      top: 0,
      left: 60,
    };
    canvasContext.fillStyle = currentBox.color;
    canvasContext.fillRect(
      currentBox.left,
      currentBox.top,
      currentBox.width,
      currentBox.height
    );
  }

  function moveDown() {
    let maxDepth = 140;
    if (pillars[currentBox.left]) {
      maxDepth = pillars[currentBox.left];
    }
    if (currentBox.top < maxDepth) {
      canvasContext.clearRect(
        currentBox.left,
        currentBox.top,
        currentBox.width,
        currentBox.height
      );
      currentBox.top += 10;
      canvasContext.fillStyle = currentBox.color;
      canvasContext.fillRect(
        currentBox.left,
        currentBox.top,
        currentBox.width,
        currentBox.height
      );
    } else {
      pillars[currentBox.left] = currentBox.top - currentBox.height;
      create();
    }
  }

  function moveRight() {
    let allowRight = false;
    if (
      pillars[currentBox.left + 10] &&
      pillars[currentBox.left + 10] > currentBox.top
    ) {
      allowRight = true;
    }
    if (!pillars[currentBox.left + 10]) {
      allowRight = true;
    }
    if (allowRight) {
      canvasContext.clearRect(
        currentBox.left,
        currentBox.top,
        currentBox.width,
        currentBox.height
      );
      currentBox.left += 10;
      canvasContext.fillStyle = currentBox.color;
      canvasContext.fillRect(
        currentBox.left,
        currentBox.top,
        currentBox.width,
        currentBox.height
      );
    }
  }

  function moveLeft() {
    let allowLeft = false;
    if (
      pillars[currentBox.left - 10] &&
      pillars[currentBox.left - 10] > currentBox.top
    ) {
      allowLeft = true;
    }
    if (!pillars[currentBox.left - 10]) {
      allowLeft = true;
    }
    if (allowLeft) {
      canvasContext.clearRect(
        currentBox.left,
        currentBox.top,
        currentBox.width,
        currentBox.height
      );
      currentBox.left -= 10;
      canvasContext.fillStyle = currentBox.color;
      canvasContext.fillRect(
        currentBox.left,
        currentBox.top,
        currentBox.width,
        currentBox.height
      );
    }
  }

  return {
    create: create,
    moveDown: moveDown,
    moveRight: moveRight,
    moveLeft: moveLeft,
  };
})();
