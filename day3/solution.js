// puzzle 3
const fs = require("fs");
var input = fs.readFileSync("input.txt", "utf8");
const regex = /mul\(\d{1,3},\d{1,3}\)/g;

const matches = input.match(regex) || [];

const multiplied = [];

matches.forEach((match) => {
  const [num1, num2] = match.match(/\d+/g);
  const result = parseInt(num1) * parseInt(num2);
  multiplied.push(result);
});

let totalSum = multiplied.reduce((acc, val) => acc + val, 0);

//part 1 solution
console.log(totalSum);

//part 2 solution
function calculateEnabledMuls(input) {
  // Regex patterns
  const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/;

  // State variable
  let isEnabled = true;
  let sum = 0;

  // Match all instructions sequentially
  const matches = input.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g);

  if (!matches) {
    return 0; // Return 0 if no matches found
  }

  for (const match of matches) {
    if (match === "do()") {
      isEnabled = true; // Enable future `mul` instructions
    } else if (match === "don't()") {
      isEnabled = false; // Disable future `mul` instructions
    } else if (mulRegex.test(match) && isEnabled) {
      // Extract arguments from `mul` instruction
      const execResult = mulRegex.exec(match);
      if (execResult) {
        const [, arg1, arg2] = execResult;
        sum += Number(arg1) * Number(arg2); // Add product to the sum
      }
    }
  }

  return sum;
}

const result = calculateEnabledMuls(input);
console.log(result); // Output: 48
