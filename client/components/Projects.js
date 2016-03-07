import React from 'react';
var ProjectList = require('./Projectlist');
var fetchRequest = require('../http-request');
var SetIntervalMixin = require('../mixins/setinterval');
require('../style/modules/container.css');
var Logger = require('../front-end-logger.js');
var config = require('../config.js');
var log = new Logger();

var url = window.location.origin + '/api/projects';

var Projects = React.createClass({
  renderName: 'Projects',

  mixins: [SetIntervalMixin],
  getInitialState: function() {
    return {
      projectBuildList: []}
  },

  componentDidMount: function() {
    log.info('route change: ' + window.location);
    var _this = this;
    this.getItems();
    this.setInterval(function(){ _this.getItems(); }, 10000);
  },

  getItems: function() {
    fetchRequest('GET', url, null, this.updateList);
  },

  updateList: function(response) {
    this.setState({projectBuildList: response.projects});
  },

  render: function(){
    return (
      <div>
        <h3>Projects</h3>
        <ProjectList projectBuildList={this.state.projectBuildList} />
      </div>
    )
  }
})

module.exports = Projects;
