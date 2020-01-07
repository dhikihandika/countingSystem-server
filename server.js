/*
Author  : dhikihandika
Email   : dhikihandika36@gmail.com
Date    : 02/01/2020
*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 


app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  return next();
  });

app.use(bodyParser.json())
 
require('./routes/route.js')(app);
 
// Create a Server
var server = app.listen(3500, function () {                                     // Set app listen port
  var host = server.address().address
  var port = server.address().port
 
console.log('====================================');
console.log("App listening at http://%s:%s", host, port)
console.log('====================================');
})

