'use strict';

var React = require('react');
var fetchRequest = require('../http-request');
var url = window.location.origin + '/project/';
var Progress = require('react-progressbar');

var OneProject = React.createClass({
	renderName: 'OneProject',

	getInitialState: function() {
		return {
			name: '',
			currentLines: 0,
			actualLines: 0,
		};
	},

	componentDidMount: function () {
		this.getOneProject(this.props.params.id);
	},

	getOneProject: function (id) {
		fetchRequest('GET', url + id, null, this.updateList);
	},

	updateList: function (response) {
		console.log(response);
		this.setState({name: response.name});
	},

	render: function() {
		return(
			<div>
				<h4>Project name: {this.state.name}</h4>
				<h4>Coverage: {this.state.currentLines} / {this.state.actualLines}</h4>
				<div>
					<Progress completed={20} />
				</div>
			</div>);
	},
});

module.exports = OneProject;



