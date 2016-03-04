'use strict';

var React = require('react');
var fetchRequest = require('../http-request');
var url = window.location.origin + '/project/';
var Progress = require('react-progressbar');
require('../style/modules/progressbar.css');

var OneProject = React.createClass({
	renderName: 'OneProject',

	getInitialState: function() {
		return {
			name: '',
			totalLines: 0,
			coveredLines: 0,
		};
	},

	componentDidMount: function () {
		this.getOneProject(this.props.params.id);
	},

	getOneProject: function (id) {
		fetchRequest('GET', url + id, null, this.updateList);
	},

	updateList: function (response) {
		var project = response.projects;
		this.setState({
			name: project[0].projectName,
			coveredLines: Number(project[0].lastBuild.coverage.actualLines),
			totalLines: Number(project[0].lastBuild.coverage.totalLines)
		});
	},

	render: function() {
		return(
			<div>
				<h4>Project name: {this.state.name}</h4>
				<h4>Coverage: {this.state.coveredLines} / {this.state.totalLines}</h4>					
						<Progress completed={this.state.coveredLines / this.state.totalLines * 100} />
			</div>);
	},
});

module.exports = OneProject;



