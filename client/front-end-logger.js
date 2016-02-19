'use strict';

var fetchRequest = require('./http-request.js');
var systemLogLevel = 'info';

function Logger(InnerDate, logMethod) {
  var _this = this;

  this.createLog = function (logLevel, eventName) {
    var date = new InnerDate();
    var log = {
      logLevel: logLevel,
      dateTime: date.toISOString(),
      eventOrigin: 'FRONT-END',
      event: eventName,
    };
    return log;
  };

  this.submitLog = function (logLevel, eventName) {
    if (_this.logLevelList.indexOf(logLevel) >= _this.logLevelList.indexOf(systemLogLevel)) {
      var log = _this.createLog(logLevel, eventName);
      console.log('log: ' + JSON.stringify(log));
      fetchRequest('POST', window.location.origin + '/api/log', log, null);
    }
  };

  InnerDate = InnerDate || Date;
  logMethod = logMethod || this.submitLog;

  this.debug = function (eventName) {
    logMethod('debug', eventName);
  };

  this.info = function (eventName) {
    logMethod('info', eventName);
  };

  this.warn = function (eventName) {
    logMethod('warn', eventName);
  };

  this.error = function (eventName) {
    logMethod('error', eventName);
  };

  this.logLevelList = [
      'debug',
      'info',
      'warn',
      'error',
      ];

}

module.exports = Logger;
