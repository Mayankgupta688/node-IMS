var fileSystem = require("fs");
var fistName = "";
var secondName = "";

firstName = fileSystem.readFileSync("./files/1.txt")
secondName = fileSystem.readFileSync("./files/2.txt")

console.log(firstName + secondName)

for (let i = 0; i < 10; i++) {
    console.log(i)
}