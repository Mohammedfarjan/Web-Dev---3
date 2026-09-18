const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Program started");

let numbers = [3, 4, 7, 10, 15];

for (let i = 0; i < numbers.length; i++) {
  if (isEven(numbers[i])) {
    log(numbers[i] + " is even");
  } else {
    log(numbers[i] + " is odd");
  }
}

log("Program finished");
