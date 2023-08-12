var fileSystem = require("fs");
var fistName = "";
var secondName = "";

fileSystem.readFile("./files/1.txt", function (err, data) {
    if (err != null && err.code === "ENOENT") {
        console.log("Error Finding File")
    } else {
        if (data.toString().length > 0) {
            firstName = data.toString();
        }
    }
})

fileSystem.readFile("./files/2.txt", function (err, data) {
    if (err != null && err.code === "ENOENT") {
        console.log("Error Finding File")
    } else {
        if (data.toString().length > 0) {
            lastNames = data.toString();
        }
    }
})

console.log("Mayank Gupta 1213t8426o8t")

for (let i = 0; i < 10; i++) {
    console.log(i)
}