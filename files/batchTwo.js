var express = require("express");
var server = express();
var cors = require("cors");
var bodyParser = require("body-parser");

var employees = [
    { name: "Mayank", age: 30 },
    {name: "Varun", age: 31 }
]

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors());

server.get("/employees", function (req, res) {
    res.send(employees);
})

server.post("/addEmployees/:randomdata", function (req, res) {
    
    var filterEmployee = employees.filter((emp) => {
        return emp.name == req.body.name
    })
    
    if (filterEmployee.length > 0) {
        res.errored();
    }
    
    employees.push({name: req.body.name, age: req.body.age})
    res.send(employees)
})

server.put("/updateEmployee/:userName", function (req, res) {
    debugger;
    employees = employees.map(function (emp) {
        debugger;
        if (emp.name == req.params.userName) {
            emp.age = req.body.age
        }
        return emp;
    })
    
    res.send(employees);
})

server.delete("/deleteEmployees/:userName", function (req, res) {
    debugger;
    employees = employees.filter(function (emp) {
        return emp.name != req.params.userName
    });
    
    res.send(employees);
})

server.delete("/deleteEmployees/:userName", function (req, res) {
    employees = employees.filter(function (emp) {
        return emp.name != req.params.userName
    });
    
    res.send(employees);
})

server.listen(4000);