'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var DataBaseRequests = require('./databaseRequests');
var HeartBeatController = require('./controller/heartBeatController.js');
var logLevelForFrontend = require('./controller/logLevelForFrontend.js');
var logger = require('./logger.js')();

function initExpressServer(dataBaseConnection) {
  var app = express();
  var dataBaseRequests = new DataBaseRequests(dataBaseConnection);
  var heartBeatController = new HeartBeatController(dataBaseRequests);

  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(logRequest);
  app.get('/heartbeat', heartBeatController.getHeartBeat);
  app.get('/loglevel', logLevelForFrontend.getLevel);
  app.post('/api/log', logLevelForFrontend.frontendLogRequest);
  app.get('/api/projects', heartBeatController.getAllProjects);

  function logRequest(req, res, next) {
    var parts = {
      date: new Date(),
      method: req.method,
      URL: req.originalUrl,
    };

    logger.info(parts);
    next();
  }

  return app;
}

module.exports = initExpressServer;
