'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var DataBaseRequests = require('./databaseRequests');
var Controller = require('./controller.js');

function initExpressServer(dataBaseConnection) {
  var app = express();
  var dataBaseRequests = new DataBaseRequests(dataBaseConnection);
  var controller = new Controller(dataBaseRequests);

  app.use(express.static('public'));
  app.use(bodyParser.json());

  app.get('/heartbeat', controller.getHeartBeat);

  return app;
}

module.exports = initExpressServer;
