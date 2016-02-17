'use strict';

var fetchRequest = require('./http-request.js');
var globalLogLevel = 'info';

function Logger() {
  var _this = this;

  this.debug = function () {
    var logLevel = 'debug';
    this.createLog(logLevel);
  };

  this.info = function () {
    var logLevel = 'info';
    this.createLog(logLevel);
  };

  this.warn = function () {
    var logLevel = 'warn';
    this.createLog(logLevel);
  };

  this.error = function () {
    var logLevel = 'error';
    this.createLog(logLevel);
  };

  this.logLevelList = [
      'debug',
      'info',
      'warn',
      'error',
      ];

  this.createLog = function (logLevel) {
    var date = new Date();

    var logObject = {
      logLevel: logLevel,
      time: date.toISOString(),
      eventOrigin: 'FRONT-END',
      event: 'main page load',
    };

    if (_this.logLevelList.indexOf(logLevel) >= _this.logLevelList.indexOf(globalLogLevel)) {
      console.log('log: ' + JSON.stringify(logObject));
      fetchRequest('POST', window.location.origin + '/api/log', logObject);
    }
  };
}

module.exports = Logger;
