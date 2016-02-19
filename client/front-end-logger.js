'use strict';

var fetchRequest = require('./http-request.js');
var systemLogLevel = 'info';

function Logger(InnerDate, logMethod, consoleLog, testURL) {
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
      consoleLog('log: ' + JSON.stringify(log));
      var url = testURL || window.location.origin + '/api/log';
      logMethod('POST', url, log, null);
    }
  };

  InnerDate = InnerDate || Date;
  logMethod = logMethod || fetchRequest;
  consoleLog = consoleLog || console.log.bind(console);

  this.debug = function (eventName) {
    _this.submitLog('debug', eventName);
  };

  this.info = function (eventName) {
    _this.submitLog('info', eventName);
  };

  this.warn = function (eventName) {
    _this.submitLog('warn', eventName);
  };

  this.error = function (eventName) {
    _this.submitLog('error', eventName);
  };

  this.logLevelList = [
      'debug',
      'info',
      'warn',
      'error',
      ];

}

module.exports = Logger;
