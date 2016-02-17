var React = require('react');
var Router = require('react-router');
var Main = require('../Main');
var Admin = require('../Admin');
var Projects = require('../Projects');

var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path ="/" component={Main}>
    <Route path="admin" component={Admin} />
    <IndexRoute component={Projects} />
  </Route>
);
