'use strict';

<<<<<<< HEAD
var config = require('./server/config.js');
var initExpress = require ('./server/initExpressServer.js');
var dataBaseConnection = require('./server/dataBaseConnection.js');

var port = config.PORT_FOR_SERVER;
var app = initExpress(dataBaseConnection);

app.listen(port, function() {
=======
var config = require('./config.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = config.PORT_FOR_SERVER;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, function () {
>>>>>>> f001f0f182a52de6fd6546fe9129a46ad30e6df0
  console.log('Listening on port: ' + port);
});
