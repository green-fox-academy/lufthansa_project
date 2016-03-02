'use strict';

import React from 'react';
var fetchRequest = require('../http-request');
var ProjectTable = require('./ProjectTable');
require('../style/modules/container.css');
var url = window.location.origin + '/api/projects';


var Admin = React.createClass({
  renderName: 'Admin',
  getInitialState: function () {
    return {
      projectList: [],
      name:'',
      path:'',
    };
  },

  componentDidMount: function () {
    this.getProjectList();
  },

  getProjectList: function () {
    fetchRequest('GET', url, null, this.updateList);
  },

  updateList: function (response) {
    this.setState({ projectList: response });
  },

  handleNameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  handlePathChange: function (event) {
    this.setState({ path: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var updatedProjectlist = this.state.projectList.concat({
      name: this.state.name,
      path: this.state.path,
    });
    this.setState({ projectList: updatedProjectlist });
  },

  render: function () {
    return (
        <div>
          <h3>Admin form</h3>
          <ProjectTable projectList={this.state.projectList}/>
            <form className="inputForm" onSubmit={this.handleSubmit}>
              <input className="inputProjectName" type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="type project name" />
              <input className="inputProjectUrl" type="text" onChange={this.handlePathChange} value={this.state.path} placeholder="type path" />
              <button className="addButton"></button>
            </form>
        </div>
    );
  }
});

module.exports = Admin;
