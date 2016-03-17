'use strict';

var React = require('react');
var Progress = require('react-progressbar');
require('../style/modules/progressbar.css');

var Progressbar = React.createClass({
  renderName: 'Progressbar',

  determineProgressbarColor: function(ratio, limit) {
    if (ratio < limit) {
      return "#F48D7D";
    }
    return null;
  },

  render: function(){
    return (
      <Progress completed={this.props.percentage} color={this.determineProgressbarColor(this.props.percentage, this.props.percentageLimit)}/>
    )
  }
})

module.exports = Progressbar;