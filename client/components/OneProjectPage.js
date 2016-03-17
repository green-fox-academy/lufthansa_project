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
			totalLines: Number(project[0].lastBuild.coverage.totalLines),
			testCaseCount: Number(project[0].lastBuild.testReport.testCaseCount),
			successCount: Number(project[0].lastBuild.testReport.successCount),
			testTime: Math.floor(project[0].lastBuild.testReport.runningTime),
			error: "TypeError: 'undefined' is not a function (evaluating 'this.getComponentLayout().getDockedItems('render', beforeBody)') http://localhost:9011/hostpage.html 119681",
		});
		this.setProggressBarColor();
	},

	setProggressBarColor: function () {
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
					<div className="coveragePercentage">{Math.floor(this.state.coveredLines / this.state.totalLines * 100) + "%"}</div>
				<h4 className="testCases">Test cases passing: </h4>
					<div className="testCasesPassing">{this.state.successCount} / {this.state.testCaseCount}</div>
						<Progress completed={this.state.successCount / this.state.testCaseCount * 100}/>
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



