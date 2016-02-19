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

log.info('main page load');
var log = new Logger();

