'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var DataBaseRequests = require('./databaseRequests');
var HeartBeatController = require('./controller/heartBeatController.js');
var logLevelForFrontend = require('./controller/logLevelForFrontend.js');
var GetAllProjectsController = require('./controller/getAllProjectsController.js');
var AddProjectController = require('./controller/AddProjectController.js');
var GetOneProjectController = require('./controller/getOneProjectController.js');
var ChangeVisibilityController = require('./controller/changeVisibilityController.js');
var AggregationController = require('./controller/aggregationController.js');
var UpdateProjectPropertiesController = require('./controller/updateProjectPropertiesController');
var logger = require('./logger.js')();

function initExpressServer(dataBaseConnection) {
  var app = express();
  var dataBaseRequests = new DataBaseRequests(dataBaseConnection);
  var heartBeatController = new HeartBeatController(dataBaseRequests);
  var getAllProjectsController = new GetAllProjectsController(dataBaseRequests);
  var addProjectController = new AddProjectController(dataBaseRequests);
  var getOneProjectController = new GetOneProjectController(dataBaseRequests);
  var changeVisibilityController = new ChangeVisibilityController(dataBaseRequests);
  var aggregationController = new AggregationController(dataBaseRequests);
  var updateProjectPropertiesController = new UpdateProjectPropertiesController(dataBaseRequests);

  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(logRequest);
  app.get('/heartbeat', heartBeatController.getHeartBeat);
  app.get('/loglevel', logLevelForFrontend.getLevel);
  app.post('/api/log', logLevelForFrontend.frontendLogRequest);
  app.get('/api/projects', getAllProjectsController.getAllProjects);
  app.post('/api/projects', addProjectController.addProject);
  app.get('/project/:id', getOneProjectController.getOneProject);
  app.put('/api/project/:id', changeVisibilityController.changeVisibility);
  app.put('/api/project/update/:id', updateProjectPropertiesController.updateProjectProperties);
  app.get('/api/aggregation', aggregationController.aggregate);

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
