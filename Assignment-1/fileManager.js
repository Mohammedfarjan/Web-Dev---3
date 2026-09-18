const fs = require("fs");

console.log("Creating file...");
fs.writeFileSync("test.txt", "Hello Node.js");
console.log("File created");

console.log("Reading file...");
let data = fs.readFileSync("test.txt", "utf8");
console.log(data);

console.log("Updating file...");
fs.appendFileSync("test.txt", "\nLearning FS Module");
console.log("File updated");

data = fs.readFileSync("test.txt", "utf8");
console.log(data);

console.log("Deleting file...");
fs.unlinkSync("test.txt");
console.log("File deleted");
