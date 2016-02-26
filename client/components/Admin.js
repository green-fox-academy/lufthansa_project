'use strict';

import React from 'react';
var fetchRequest = require('../http-request');
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
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="Project name" />
            <input type="text" onChange={this.handlePathChange} value={this.state.path} placeholder="Path" />
            <button>ADD</button>
          </form>
        </div>
    );
  }
});


var ProjectTable = React.createClass({
  renderName: 'projectTable',

  render: function (response) {
    var createProjectLine = function (project) {
      var projectDetails = project.projects[0];
      return (
        <tr key={projectDetails.id}>
          <td>{projectDetails.name}</td>
          <td>{projectDetails.projectUrl}</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
      )
    }

    return (
      <table>
        <tbody>
          {this.props.projectList.map(createProjectLine)}
        </tbody>
      </table>
    );
  }
});

module.exports = Admin;
