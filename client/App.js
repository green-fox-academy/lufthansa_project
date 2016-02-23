'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
require('./style/modules/navbar.css');
require('./style/modules/container.css');
require('./style/modules/index.css');
var routes = require('./config/routes');
var Logger = require('./front-end-logger.js');
var fetchRequest = require('./http-request.js');
var config = require('./config.js');

function main() {
  fetchRequest('GET', window.location.origin + '/loglevel', null, displayMainPage);
}

function displayMainPage(response) {
  config.systemLogLevel = response.BackendLevel;
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
  );
  var log = new Logger();
  log.info('main page load');
}

main();
