'use strict';

var React = require('react');
var Progressbar = require('./ProgressBar');
var fetchRequest = require('../http-request');
var url = window.location.origin + '/project/';
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
			testCaseCount: 0,
			successCount: 0,
			testTime: null,
			error: [],
		};
	},

	componentDidMount: function () {
		log.info('route change: ' + window.location);
		this.getOneProject(this.props.params.id);
	},

	getOneProject: function (id) {
		fetchRequest('GET', url + id, null, this.updateList);
	},

	getErrorFromTestCases: function (response) {
		var errorMessage;
		var testList = response.projects[0].lastBuild.testReport.testCases;
		testList.forEach(function(key) {
			if(key.error !== undefined) {
				errorMessage+=key.error;
			}
		});
		return errorMessage;
	},	

	updateList: function (response) {
		var project = response.projects[0].lastBuild;
		this.getErrorFromTestCases(response);	
		this.setState({
			name: response.projects[0].projectName,
			coveredLines: Number(project.coverage.actualLines),
			totalLines: Number(project.coverage.totalLines),
			testCaseCount: Number(project.testReport.testCaseCount),
			successCount: Number(project.testReport.successCount),
			testTime: Math.floor(project.testReport.runningTime),
			error: this.getErrorFromTestCases(response)
		});
	},

	render: function() {
		return(
			<div className="oneproject-container">
				<h4 className="oneProjectName">Project name: </h4>
					<div className="projectNameTitle">{this.state.name}</div>
				<h4 className="coverage">Coverage: </h4>
					<div className="projectCoverage">{this.state.coveredLines} / {this.state.totalLines}</div>		
					<Progressbar percentage={this.state.coveredLines / this.state.totalLines * 100} percentageLimit={80} />
					<div className="coveragePercentage">{Math.floor(this.state.coveredLines / this.state.totalLines * 100) + "%"}</div>
				<h4 className="testCases">Test cases passing: </h4>
					<div className="testCasesPassing">{this.state.successCount} / {this.state.testCaseCount}</div>
						<Progressbar percentage={this.state.successCount / this.state.testCaseCount * 100} percentageLimit={100} />
					<div className="testCasesPercentage">{Math.floor(this.state.successCount / this.state.testCaseCount * 100) + "%"}</div>
				<h4 className="testTime">Test time: </h4>
					<div className="TestTimeNumber">{this.state.testTime} ms</div>
				<h4 className="errors">Errors</h4>
					<div className="code">
						<code>{this.state.error}</code>
					</div>
			</div>);
	},
});

module.exports = OneProject;



