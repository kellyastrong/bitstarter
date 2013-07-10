#!/usr/bin/env node
var fs=require('fs');
var infile = "index.html";

var message = new Buffer(fs.readFileSync(infile));

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(message.toString("utf-8", 0, 999999999))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
