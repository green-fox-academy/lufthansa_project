import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
var routes = require('./config/routes');
require('./style/style.css');
var Logger = require('./front-end-logger.js');

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
)

var logger = new Logger();
logger.debug();
logger.info();
logger.warn();
logger.error();
