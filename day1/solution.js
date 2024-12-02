//puzzle 1
var fs = require("fs");

var leftArray = [];
var rightArray = [];

// read the string from the input.txt file and split it into an array
var input = fs.readFileSync("input.txt", "utf8");
var inputArray = input.split("\n");
// loop through the array and find the left and right arrays
for (var i = 0; i < inputArray.length; i++) {
  // split the array that has two spaces into an array of two numbers
  if (inputArray[i].split("  ").length < 2) {
    continue;
  }
  leftArray.push(Number(inputArray[i].split("  ")[0]));
  rightArray.push(Number(inputArray[i].split("  ")[1]));
}

leftArray.sort();
rightArray.sort();

var totalDiff = 0;

for (var i = 0; i < leftArray.length; i++) {
  //   console.log(leftArray[i], rightArray[i]);
  totalDiff += Math.abs(leftArray[i] - rightArray[i]);
}

// First part total diffrence
console.log("Total diffrence:", totalDiff);

// Second part find similarity of the first array with the second array
var similarity = 0;

for (var i = 0; i < leftArray.length; i++) {
  similarity += leftArray[i] * rightArray.filter((x) => x === leftArray[i]).length;
}

console.log("Similarity:", similarity);
