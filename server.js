var httpServer = require("http");

var server = httpServer.createServer(function (req, res) {
    if (req.url == "/") {
        res.end("Hello TechnoFunnel");
    }
    
    if (req.url == "/home") {
        res.end("Hello To Home");
    }
    
    res.end("Hello. You are on Wrong Page");
})

server.listen(3000);