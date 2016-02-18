import React from 'react';

var ProjectList = React.createClass({
  render: function(){
    var projects = [1, 2, 3, 4]
    // var projects = this.props.projects.map(function(item) {
    //   return <li key={item.id}> {item.name} {item.build_status} {item.build_time} </li>
    // });
    return (
      <ul>
        // {projects}
      </ul>
    )
  }
})

module.exports = ProjectList;
