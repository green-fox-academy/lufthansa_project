'use strict';

<<<<<<< HEAD
var express = require ('express');
var bodyParser = require ('body-parser');
var DataBaseRequests = require('./dataBaseRequests.js');
var Controller = require('./controller.js');
=======
var express = require('express');
var bodyParser = require('body-parser');
>>>>>>> f001f0f182a52de6fd6546fe9129a46ad30e6df0

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
