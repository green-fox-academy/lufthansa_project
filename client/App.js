import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
var routes = require('./config/routes');
require('../public/style/style.css');
var Logger = require('./front-end-logger.js');

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)

var logger = new Logger();
logger.debug();
logger.info();
logger.warn();
logger.error();