import React from 'react';
var fetchRequest = require('../http-request');
var url = window.location.origin + '/projects'

var ProjectList = React.createClass({
  getInitialState: function() {
    return {projects: [], project_name:'', build_status:'', build_time:''};
  },

  componentDidMount: function() {
    this.getItems();
  },

  getItems: function() {
    fetchRequest('GET', url, null, this.updateList);
  },

updateList: function() {
  this.setState({projects: JSON.parse(response)})
},

  render: function(response){
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
        {rows}
      </table>
    )
  }
})

module.exports = ProjectList;
