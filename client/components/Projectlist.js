import React from 'react';
var fetchRequest = require('../http-request');
var url = window.location.origin + '/projects'

var ProjectList = React.createClass({
  getInitialState: function() {
    return {projects: [], name:'', build_status:'', build_time:''};
  },

  componentDidMount: function() {
    this.getItems();
  },

  getItems: function() {
    fetchRequest('GET', url, {}, this.updateList);
  },

updateList: function() {
  this.setState({projects: JSON.parse(response)})
},

  render: function(response){
    var listItems = this.state.projects.map(function(item) {
      return <li key={item.id}> {item.name} {item.build_status} {item.build_time} </li>
    });
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
})

module.exports = ProjectList;
