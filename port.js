const itemsArr = document.querySelectorAll(".port_item");
let heightFirstLine = 0;
let heightSecondLine = 0;
let heightThirdLine = 0;
let windowWidth = window.innerWidth;
const portContainer = document.querySelector(".port_container");

function setHeightArray(heightOfItem) {
  for (let index = 0; index < itemsArr.length; index++) {
    heightOfItem.push(itemsArr[index].scrollHeight);
  }
}

function checkThreeLines() {
  if (
    heightFirstLine <= heightSecondLine &&
    heightFirstLine <= heightThirdLine
  ) {
    return 1;
  } else if (
    heightSecondLine <= heightFirstLine &&
    heightSecondLine <= heightThirdLine
  ) {
    return 2;
  } else {
    return 3;
  }
}

function setThreeLinesPosition() {
  console.log("three line positioning");
  let heightOfItem = [];
  setHeightArray(heightOfItem);
  let itemWidth = itemsArr[0].offsetWidth;
  itemsArr.forEach(function setPosition(item, index, arr) {
    if (checkThreeLines() == 1) {
      item.style.top = `${heightFirstLine}px`;
      item.style.left = `0px`;
      heightFirstLine += heightOfItem[index] + 10;
    } else if (checkThreeLines() == 2) {
      item.style.top = `${heightSecondLine}px`;
      item.style.left = `${itemWidth + 1}px`;
      heightSecondLine += heightOfItem[index] + 10;
    } else {
      item.style.top = `${heightThirdLine}px`;
      item.style.left = `${itemWidth * 2 + 2}px`;
      heightThirdLine += heightOfItem[index] + 10;
    }
  });
  heightFirstLine = 0;
  heightSecondLine = 0;
  heightThirdLine = 0;
}

function checkTwoLines() {
  if (heightFirstLine <= heightSecondLine) {
    return 1;
  } else {
    return 2;
  }
}

function setTwoLinesPosition() {
  console.log("two line positioning");
  let heightOfItem = [];
  setHeightArray(heightOfItem);
  let itemWidth = itemsArr[0].offsetWidth;
  itemsArr.forEach(function setPosition(item, index, arr) {
    if (checkTwoLines() == 1) {
      item.style.top = `${heightFirstLine}px`;
      item.style.left = `0px`;
      heightFirstLine += heightOfItem[index] + 10;
    } else {
      item.style.top = `${heightSecondLine}px`;
      item.style.left = `${itemWidth + 1}px`;
      heightSecondLine += heightOfItem[index] * 1.1;
    }
  });
  heightFirstLine = 0;
  heightSecondLine = 0;
  heightThirdLine = 0;
}

function setItemsPosition() {
  console.log("start positioning");
  windowWidth = window.innerWidth;
  if (windowWidth < 992) {
    setTwoLinesPosition();
  } else {
    setThreeLinesPosition();
  }
}

function init() {
  setItemsPosition();
}

window.addEventListener("resize", setItemsPosition);
init();
