import React from 'react';
var fetchRequest = require('../http-request');
var SetIntervalMixin = require('../mixins/setinterval');

var url = window.location.origin + '/api/projects';

var ProjectList = React.createClass({
  renderName: 'ProjectList',

  mixins: [SetIntervalMixin],
  getInitialState: function() {
    return {projectBuildList: [], name:'', status:'', time:''};
  },

  componentDidMount: function() {
    var _this = this;
    this.setInterval(function(){ _this.getItems(); }, 10000);
  },

  getItems: function() {
    fetchRequest('GET', url, null, this.updateList);
  },

  updateList: function(response) {
    this.setState({projectBuildList: response})
    console.log(response);
  },

  render: function() {
    var rows = this.state.projectBuildList.map(function(build) {
      var buildDetails = build.projects[0];
      return
        <tr key={buildDetails.buildId}>
          <td className="projectName">{buildDetails.name}</td>
          <td className="buildStatus">{buildDetails.lastBuild.status}</td>
          <td className="buildDate">{buildDetails.lastBuild.time}</td>
        </tr>
    });
    return (
      <table className="fullTable">
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
});

module.exports = ProjectList;
