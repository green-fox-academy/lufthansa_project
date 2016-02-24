import React from 'react';
var ProjectList = require('./Projectlist');
require('../style/modules/container.css');

var Projects = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Projects</h3>
        <ProjectList projects={this.props.projects} />
      </div>
    )
  }
})

module.exports = Projects;
