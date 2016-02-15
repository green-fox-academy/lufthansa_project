'use strict';

var config = require('./config.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = config.PORT_FOR_SERVER;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
