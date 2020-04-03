var express = require("express");
var app = express();

var port = 3000; 

app.get("/", function(req, res) {
    res.send("<h1>Hello Express</h1>");
})

app.get("/api", function(req, res) {
    res.json({
        firstName: "Mai",
        lastName: "Hoa"
    })

})

app.get("/user/:id", function(req, res) {
    res.send(`<h1>User: ${req.params.id}`);
})

app.listen(port, function() {
    console.log("Sever is listening on PORT:" + port);
})