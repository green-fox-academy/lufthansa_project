'use strict';

var environment = require('./config.js');
var env = environment.BACKEND_LEVEL;

function Logger() {
  var _this = this;

  this.submitLog = function (logLevel, eventName) {
    if (environment.LOG_LEVELS.indexOf(logLevel) >= environment.LOG_LEVELS.indexOf(env)) {
      console.log('log: ' + JSON.stringify(eventName));
    }
  };

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
}

var logger = new Logger();

module.exports = logger;
