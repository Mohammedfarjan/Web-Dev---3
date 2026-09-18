let operation = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);

if (operation === "add") {
  console.log("Result:", num1 + num2);
} else if (operation === "sub") {
  console.log("Result:", num1 - num2);
} else if (operation === "mul") {
  console.log("Result:", num1 * num2);
} else if (operation === "div") {
  if (num2 === 0) {
    console.log("Cannot divide by zero");
  } else {
    console.log("Result:", num1 / num2);
  }
} else {
  console.log("Invalid operation. Use add, sub, mul or div");
}
