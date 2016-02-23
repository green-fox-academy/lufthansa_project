'use strict';

var logLevel = require('../config').BACKEND_LEVEL;

function LogLevelForFrontend() {

  this.getLevel = function (request, response) {
    response.status(200).json({ BackendLevel: logLevel });
  };

  this.frontendLogRequest = function (req, res) {
    var log = req.body;
    console.log(log);
    res.json({ Status: 'OK' });
  };

}

var logLevelForFrontend = new LogLevelForFrontend();

module.exports = logLevelForFrontend;
