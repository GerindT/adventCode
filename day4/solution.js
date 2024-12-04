// puzzle 4
const fs = require("fs");
var input = fs.readFileSync("input.txt", "utf8");

const matrix = input.split("\n").map((line) => line.split(""));

function countXMAS(matrix) {
  const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
    [1, 1], // Diagonal down-right
    [-1, -1], // Diagonal up-left
    [1, -1], // Diagonal down-left
    [-1, 1], // Diagonal up-right
  ];

  const target = "XMAS";
  const rows = matrix.length;
  const cols = matrix[0].length;
  let count = 0;

  function isMatch(x, y, dx, dy) {
    for (let k = 0; k < target.length; k++) {
      const nx = x + k * dx;
      const ny = y + k * dy;
      if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || matrix[nx][ny] !== target[k]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === "X") {
        // Only check if the starting letter matches
        for (const [dx, dy] of directions) {
          if (isMatch(i, j, dx, dy)) {
            count++;
          }
        }
      }
    }
  }

  return count;
}

const result = countXMAS(matrix);

console.log(result);
