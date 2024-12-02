//puzzle 2
const fs = require("fs");
var input = fs.readFileSync("input.txt", "utf8");

var levels = input.split("\n");

var safeLvl = 0;

levels.forEach((lvl, index) => {
  let level = lvl.split(" ");
  let orderType = "asc";
  let removeCount = 0;
  for (let i = 0; i < level.length; i++) {
    if (i === level.length - 1) {
      safeLvl++;
      return;
    }
    // compare the current level with the next level
    let diff = Number(level[i + 1]) - Number(level[i]);

    if (i === 0 && diff < 0) {
      orderType = "desc";
    }

    // if (index === 1) {
    //   console.log(diff, orderType, level[i], level[i + 1]);
    // }

    if (diff == 0) {
      if (removeCount === 0) {
        removeCount++;
        continue;
      } else {
        break;
      }
    }

    if (orderType === "asc" && diff < 0 && i >= 1) {
      if (removeCount === 0) {
        removeCount++;
        continue;
      } else {
        break;
      }
    }
    if (orderType === "desc" && diff > 0 && i >= 1) {
      if (removeCount === 0) {
        removeCount++;
        continue;
      } else {
        break;
      }
    }
    if (Math.abs(diff) >= 1 && Math.abs(diff) <= 3) {
      continue;
    } else {
      if (removeCount === 0) {
        removeCount++;
        continue;
      } else {
        break;
      }
    }
  }
});

console.log("Safe levels:", safeLvl);
