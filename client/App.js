import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
var routes = require('./config/routes');
// require('./style/modules/*.css');
var Logger = require('./front-end-logger.js');

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)


var log = new Logger();
log.info('main page load');

