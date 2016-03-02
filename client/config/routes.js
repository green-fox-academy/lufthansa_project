import React from 'react';
var Main = require('../components/Main');
var Admin = require('../components/Admin');
var Projects = require('../components/Projects');
var Project = require('../components/OneProjectPage');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path ="/" component={Main}>
    <Route path="admin" component={Admin} />
    <Route path="projects" component={Projects} />
    <Route path="project" component={Project} />
    <IndexRoute component={Projects} />
  </Route>
);
