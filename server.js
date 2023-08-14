// var httpServer = require("http");

// var server = httpServer.createServer(function (req, res) {
//     if (req.url == "/") {
//         res.end("Hello TechnoFunnel");
//     }
    
//     if (req.url == "/home") {
//         res.end("Hello To Home");
//     }
    
//     res.end("Hello. You are on Wrong Page");
// })

// server.listen(3000);

var httpServer = require("http");

var employees = [
    { name: "A", id: 1 },
    { name: "C", id: 2 }
]

var server = httpServer.createServer(function (req, res) {
    var response = "Page Not Found";
    if (req.url == "/employee/1") {
        var returnData = employees.filter((employee) => {
            return employee.id == 1
        })
        
        res.end(JSON.stringify(returnData))
    } 
    if (req.url == "/employee/2") {
        var returnData = employees.filter((employee) => {
            return employee.id == 2
        })
        res.end(JSON.stringify(returnData))
    } 
    if (req.url == "/") {
        response = "Hello Mayank"
    }   
    if (req.url == "/contact") {
        response = "Contact Page"
    }  
    if (req.url == "/about") {
        response = "About Page"
    }      
    res.end(response)
})

server.listen(3000)