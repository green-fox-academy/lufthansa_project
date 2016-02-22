import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
var routes = require('./config/routes');
var Logger = require('./front-end-logger.js');

require('./style/modules/navbar.css');
require('./style/modules/container.css');
require('./style/modules/index.css');

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)


var log = new Logger();
log.info('main page load');
