'use strict';

import React from 'react';
require('../style/modules/container.css');

var ProjectTable = React.createClass({
  renderName: 'ProjectTable',

  getInitialState: function () {
    return {
      selectedProjectId: -1
    };
  },

makeEditable: function (id) {
  this.setState({ selectedProjectId: id});
  console.log(selectedProjectId);
},

  createProjectLine: function (project) {
    var _this = this;
    function onDelete() {
      _this.props.onDeleteClick(project.projectId);
    }

    function onEdit() {
      _this.makeEditable(project.projectId);
    }

    return ( <tr key={project.projectId}>
        <td className="projectName">{project.projectName}</td>
        <td className="projectUrl">{project.projectUrl}</td>
        <td><button onClick={this.onEdit} className="editButton"></button></td>
        <td><button onClick={onDelete} className="deleteButton"></button></td>
      </tr>
    )
  },
  render: function (response) {
    return (
      <table className="fullTable">
        <tbody>
          {this.props.projectList.map(this.createProjectLine)}
        </tbody>
      </table>
    );
  }
});

module.exports = ProjectTable;
