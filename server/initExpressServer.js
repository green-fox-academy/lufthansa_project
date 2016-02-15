'use strict';

var express = require ('express');
var bodyParser = require ('body-parser');

function initExpressServer() {
  var app = express();

  app.use(express.static('public'));
  app.use(bodyParser.json());

  app.get('/heartbeat');

  return app;
}

module.exports = initExpressServer;