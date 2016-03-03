'use strict';

import React from 'react';
require('../style/modules/container.css');

var ProjectTable = React.createClass({
  renderName: 'ProjectTable',
  createProjectLine: function (project) {
    var projectDetails = project.projects[0];
    var _this = this;
    function onDelete() {
      _this.props.onDeleteClick(projectDetails.id);
    }
    return ( <tr key={projectDetails.id}>
        <td className="projectName">{projectDetails.name}</td>
        <td className="projectUrl">{projectDetails.projectUrl}</td>
        <td><button className="editButton"></button></td>
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
