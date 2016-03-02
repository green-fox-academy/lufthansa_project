'use strict';

import React from 'react';
require('../style/modules/container.css');
var ProjectTable = React.createClass({
  renderName: 'ProjectTable',

  render: function (response) {
    var createProjectLine = function (project) {
      var projectDetails = project.projects[0];
      return (
        <tr key={projectDetails.id}>
          <td className="projectName">{projectDetails.name}</td>
          <td className="projectUrl">{projectDetails.projectUrl}</td>
          <td><button className="editButton"></button></td>
          <td><button className="deleteButton"></button></td>
        </tr>
      )
    }

    return (
      <table className="fullTable">
        <tbody>
          {this.props.projectList.map(createProjectLine)}
        </tbody>
      </table>
    );
  }
});

module.exports = ProjectTable;
