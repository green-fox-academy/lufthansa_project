'use strict';

var environment = require('./config.js');
var env = environment.BACKEND_LEVEL;

function Logger() {
  var _this = this;

  this.log = function (level, parts) {
    console.log(parts);
    if (env === 'debug') {
      console.log(parts);
    } else if (level === env) {
      console.log(parts);
    }
  };

  this.debug = function (parts) {
    this.log('debug', parts);
  };

  this.info = function (parts) {
    this.log('info', parts);
  };

  this.warn = function (parts) {
    this.log('warn', parts);
  };

  this.error = function (parts) {
    this.log('error', parts);
  };
}

var logger = new Logger();

// function logRequest(req, res, next) {
//   var parts = [
//     new Date(),
//     req.method,
//     req.originalUrl,
//   ];
//   logger.log(parts);
//   next();
// }

module.exports = logger;
