import React from 'react';
var fetchRequest = require('../http-request');
var SetIntervalMixin = require('../mixins/setinterval');

var url = window.location.origin + '/api/projects';

var ProjectList = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function() {
    return {projects: [], project_name:'', build_status:'', build_time:''};
  },

  componentDidMount: function() {
    var _this = this;
    this.setInterval(function(){ _this.getItems(); }, 10000);
  },

  getItems: function() {
    fetchRequest('GET', url, null, this.updateList);
  },

  updateList: function(response) {
    this.setState({projects: response})
    console.log(response);
  },

  render: function() {
    var rows = this.state.projects.map(function(item) {
      return
        <tr key={item.build_id}>
          <td className="projectName">{item.project_name}</td>
          <td className="buildStatus">{item.build_status}</td>
          <td className="buildDate">{item.build_time}</td>
        </tr>
    });
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
});

module.exports = ProjectList;
