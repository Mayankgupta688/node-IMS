var express = require("express")
var server = express();
var cors = require("cors");
var bodyParser = require("body-parser");

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

var employees = [{
    name: "Mayank",
    age: 35
}, {
    name: "TechnoFunnel",
    age: 4
}]

server.get("/getEmployees", function (req, res) {
    res.send(employees)
})

server.get("/employees/:empName", function (req, res) {
    var userName = req.params.empName;
    var filteredData = employees.filter(function (emp) {
        return emp.name == userName
    })
    res.send(filteredData[0]);
})

server.post("/addEmployee", function (req, res) {
    employees.push({
        name: req.body.name,
        age: req.body.age
    })
    res.send("Data Added")
})

server.delete("/deleteEmployee/:empName", function (req, res) {
    var userName = req.params.empName;
    employees = employees.filter(function (emp) {
        return emp.name != userName
    })
    res.send(employees);
})

server.put("/updateData/:username", function (req, res) {
    debugger;
})

server.listen(5000);