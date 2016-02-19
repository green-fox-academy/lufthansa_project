import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
var routes = require('./config/routes');
var Logger = require('./front-end-logger.js');
require('./style/modules/container.css');
require('./style/modules/index.css');
require('./style/modules/navbar.css');

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)

function TestDate() {}
TestDate.prototype.toISOString = function () {
    return 'evetke';
  };

function testlogMethod(logLevel, eventName) {
    console.log(logLevel, eventName);
  };

var log = new Logger();
log.debug("page load");
log.info("page load");
log.warn("page load");
log.error("page load");

var logger = new Logger(TestDate, testlogMethod);
logger.debug("page load");
logger.info("page load");
logger.warn("page load");
logger.error("page load");
