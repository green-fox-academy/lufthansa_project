'use strict';

import React from 'react';
var fetchRequest = require('../http-request');
var url = window.location.origin + '/api/projects';

var Admin = React.createClass({
  renderName: 'Admin',
  getInitialState: function () {
    return {
      projectList: [
       { name: 'project_1', path: '/path' },
       { name: 'project_2', path: '/path' },
      ],
      name:'',
      path:'',
    };
  },

  componentDidMount: function () {
    this.getProjectList();
  },

  getProjectList: function () {
    // fetchRequest('GET', url, null, this.updateList);
  },

  updateList: function (response) {
    // this.setState( projectList: response });
    console.log(this.state.name + '   ' + this.state.path);
  },

  handleNameChange: function (event) {
    this.setState({ name: event.target.value });
  },

  handlePathChange: function (event) {
    this.setState({ path: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    console.log(this.state.name + ' ' + this.state.path);
    var updatedProjectlist = this.state.projectList.concat({
      name: this.state.name,
      path: this.state.path,
    });
    this.setState({ projectList: updatedProjectlist });

    // var dataToObject = {
    //   name: this.state.name,
    //   calorie: this.state.calorie,
    //   date: this.state.date
    // };
    // var data = JSON.stringify(dataToObject);
    // createRequest('POST', url, data, this.getItems);
    // }
  },

  render: function () {
    return (
        <div>
          <h3>Admin form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="Project name" />
            <input type="text" onChange={this.handlePathChange} value={this.state.path} placeholder="Path" />
            <button>ADD</button>
          </form>
          <ProjectTable projectList={this.state.projectList}/>
        </div>
    );
  }
});

var ProjectTable = React.createClass({
  renderName: 'projectTable',

  render: function (response) {
    var createProjectLine = function (project) {
      return (
        <tr key={project.name}>
          <td>{project.name}</td>
          <td>{project.path}</td>
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
