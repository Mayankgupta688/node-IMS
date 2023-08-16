var express = require("express");
var fs = require("fs");
var server = express();

var cors = require('cors')
server.use(cors())

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.get("/", function (req, res) {
    fs.readFile("./employee.js", function (err, data) {
        debugger;
        res.end(data.toString());
    })
    
})
server.get("/about", function (req, res) {
    res.end("This is About Page")
})
server.get("/contact", function (req, res) {
    res.end("This is Contact Page")
})

server.post("/employee", function (req, res) {
    res.send({
        name: "data"
    })
})

server.put("/employee", function () {
    debugger;
})

server.delete("/employee", function () {
    debugger;
})

server.listen(4000);