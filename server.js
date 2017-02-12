//REQUIRE
var express    = require('express');
var app        = express();
var mongojs    = require('mongojs');
var db         = mongojs('mongodb://admin:123@ds143559.mlab.com:43559/mean_project');
var bodyParser = require('body-parser');

//USE NODEJS
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//INDEX METHODS
require('./public/server/indexServer.js')(app, db, mongojs);

//SERVER STARTUP
var port = process.env.PORT || 8000;
app.listen(port);
console.log("Nerve Server Running, Start The Game :)");