import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
var Main = require('./Main');
// var routes = require('./config/routes');

ReactDOM.render(
  // <Router>{routes}</Router>,
  <Main />,
  document.getElementById('app')
);
