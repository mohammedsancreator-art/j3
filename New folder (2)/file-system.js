const fs = require("fs");

// create file
fs.writeFileSync("welcome.txt", "Hello Node");

// read file
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
