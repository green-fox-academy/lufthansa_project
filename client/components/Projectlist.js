'use strict';

import React from 'react';

var ProjectList = React.createClass({
  renderName: 'ProjectList',


  render: function(response) {
    var createRows = function (build) {
      var buildDetails = build.projects[0];
      return (<tr key={buildDetails.buildId}>
          <td className="projectName">{buildDetails.name}</td>
            <td>{buildDetails.lastBuild.status === true ? <div className="greenBuild"></div> : <div className="redBuild"></div>}</td>
          <td className="buildDate">{buildDetails.lastBuild.time}</td>
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
