'use strict';

var React = require('react');
var fetchRequest = require('../http-request');
var url = window.location.origin + '/project/';
var Progress = require('react-progressbar');
require('../style/modules/progressbar.css');
require('../style/modules/container.css');
var Logger = require('../front-end-logger.js');
var config = require('../config.js');
var log = new Logger();

var OneProject = React.createClass({
	renderName: 'OneProject',

	getInitialState: function() {
		return {
			name: '',
			totalLines: 0,
			coveredLines: 0,
			progressBarColor: null
		};
	},

	componentDidMount: function () {
		log.info('route change: ' + window.location);
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
		this.setProggressBarColor();
	},

	setProggressBarColor: function () {
		console.log(this.state.coveredLines / this.state.totalLines);
		if ((this.state.coveredLines / this.state.totalLines) < 0.8) {
			this.setState({
				progressBarColor: "#F48D7D"
			})
		}
	},

	render: function() {
		return(
			<div className="oneproject-container">
				<h4 className="oneProjectName">Project name: </h4>
					<div className="projectNameTitle">{this.state.name}</div>
				<h4 className="coverage">Coverage: </h4>
					<div className="projectCoverage">{this.state.coveredLines} / {this.state.totalLines}</div>				
					<Progress completed={this.state.coveredLines / this.state.totalLines * 100} color={this.state.progressBarColor}/>
			</div>);
	},
});

module.exports = OneProject;



