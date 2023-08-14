var express = require("express");
var fs = require("fs");
var server = express();
server.get("/", function (req, res) {
    fs.readFile("./employee.js", function (err, data) {
        debugger;
        res.end(data.toString());
    })
    
})
server.put("/about", function (req, res) {
    res.end("This is About Page")
})
server.get("/contact", function (req, res) {
    res.end("This is Contact Page")
})
server.listen(4000);