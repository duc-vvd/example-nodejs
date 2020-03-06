var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"}, "utf8");

    var html = fs.readFileSync(__dirname + "/index.html", "utf8");
    var user = "Thanh";
    html = html.replace("{user}", user);

    res.end(html);
}).listen(1337, "127.0.0.1");