import React from 'react';
var ProjectList = require('./Projectlist');
require('../style/modules/container.css');

var Projects = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Projects</h3>
        <ProjectList projects={this.props.projects} />
        <table className="fullTable">
          <tbody>
            <tr className="firstRow">
              <td className="projectName">reallylooooooooooooooongprojectnamefortest</td>
              <td className="circle">
               <span className="greenBuild"></span>
              </td>
              <td className="buildDate">2/22/2016 14:01</td>
            </tr>
            <tr className="secondRow">
              <td className="projectName">shortpprojectname</td>
               <td className="circle">
                 <span className="redBuild"></span>
               </td>
               <td className="buildDate">2/22/2016 14:13</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Projects;
