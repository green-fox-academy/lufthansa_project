'use strict';

var environment = require('./config.js');
var env = environment.BACKEND_LEVEL;

function createLogger() {

  function submitLog(logLevel, eventName) {
    if (environment.LOG_LEVELS.indexOf(logLevel) >= environment.LOG_LEVELS.indexOf(env)) {
      console.log('log: ' + JSON.stringify(eventName));
    }
  }

  function debug(eventName) {
    submitLog('debug', eventName);
  }

  function info(eventName) {
    submitLog('info', eventName);
  }

  function warn(eventName) {
    submitLog('warn', eventName);
  }

  function error(eventName) {
    submitLog('error', eventName);
  }

  return {
    debug: debug,
    info: info,
    warn: warn,
    error: error,
  };
}

module.exports = createLogger;
