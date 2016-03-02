'use strict';

import React from 'react';
import {Link} from 'react-router';

var ProjectList = React.createClass({
  renderName: 'ProjectList',


  render: function(response) {
    var createRows = function (build) {
      var buildDetails = build.projects[0];
      return (<tr key={buildDetails.buildId}>
            <td className="projectName"><Link to="project/:id">{buildDetails.name}</Link></td>
          if ({buildDetails.lastBuild.status}) === True {
            <td className="greenBuild"><div></div></td>
          } else {
            <td className="redBuild"><div></div></td>
          };
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
