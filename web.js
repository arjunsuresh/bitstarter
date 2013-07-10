var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

buffer = new Buffer(256);
buffer=fs.readFileSync("index.html");
string=buffer.toString();
app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
