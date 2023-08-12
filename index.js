var random = require('randomize');
var fileSystem = require("fs")
var randomValue = random(100); 
console.log(randomValue);
var data = fileSystem.readFileSync("./files/a.txt");
console.log(data.toString());
debugger;   