var express = require("express");
var app = express();

var server = app.listen(12345, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function(req, res, next){
    res.end("Hello from Node, Let's enjoy studying!");
});
