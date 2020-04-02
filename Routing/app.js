var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    if(req.url === "/" || req.url === "/index.html") {

        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream(__dirname + "/index.html").pipe(res);

    }else if(req.url === "/api") {
        res.writeHead(200, {"Content-type": "application/json"});

        var obj = {
            firstName: "Hoa",
            lastName: "Mai"
        };

        res.end(JSON.stringify(obj));
    }else{

        res.writeHead(404);
        res.end("Not Found");

    }
}).listen(1337, "127.0.0.1", function() {
    console.log("Web listening on http://localhost:1337");
})