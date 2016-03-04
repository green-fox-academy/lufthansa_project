'use strict';

import React from 'react';
import {Link} from 'react-router';

var ProjectList = React.createClass({
  renderName: 'ProjectList',


  render: function(response) {
    var createRows = function (project) {
      return (<tr key={project.lastBuild.buildId}>
          <td className="projectName"><Link to={"project/" + project.projectId}>{project.projectName}></Link></td>
          <td>{project.lastBuild.status === true ? <div className="greenBuild"></div> : <div className="redBuild"></div>}</td>
          <td className="buildDate">{project.lastBuild.time}</td>
        </tr>);
    };
    return (
      <table className="fullTable">
        <tbody>
          {this.props.projectBuildList.map(createRows)}
        </tbody>
      </table>
    )
  }
});

module.exports = ProjectList;
