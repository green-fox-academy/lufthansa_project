'use strict';

import React from 'react';

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

module.exports = ProjectTable;
