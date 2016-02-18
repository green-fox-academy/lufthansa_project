'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var DataBaseRequests = require('./databaseRequests');
var Controller = require('./controller.js');
var logger = require('./logger.js');

function initExpressServer(dataBaseConnection) {
  var app = express();
  var dataBaseRequests = new DataBaseRequests(dataBaseConnection);
  var controller = new Controller(dataBaseRequests);

  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(logRequest);
  app.get('/heartbeat', controller.getHeartBeat);

  function logRequest(req, res, next) {
    var parts = [
      new Date(),
      req.method,
      req.originalUrl,
    ];
    logger.log(parts);
    next();
  }

  return app;
}

module.exports = initExpressServer;
