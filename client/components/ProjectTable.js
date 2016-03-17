'use strict';

import React from 'react';
require('../style/modules/container.css');

var ProjectTable = React.createClass({
  renderName: 'ProjectTable',

  getInitialState: function () {
    return {
      selectedProjectId: -1
    };
  },

  createProjectLine: function (project) {
    var _this = this;
    function onDelete() {
      _this.props.onDeleteClick(project.projectId);
    }

    function onEdit() {
      _this.setState({ selectedProjectId: project.projectId});
    }

    function onCancel() {
      _this.setState({ selectedProjectId: 0 });
    }

    function addModification() {
      _this.setState({ selectedProjectId: 0 });
      _this.props.addModificationClick(project.projectId);
    }

    function changeName(event) {
      _this.props.addNewName(event.target.value);
      _this.props.addNewPath(project.projectUrl);
    }

    function changePath(event) {
      _this.props.addNewName(project.projectName);
      _this.props.addNewPath(event.target.value);
    }


    return ( <tr key={project.projectId}>
          <td className="projectName">{project.projectId === this.state.selectedProjectId ?
          <input defaultValue={project.projectName} value={this.props.newname} onChange={changeName}/> : project.projectName}</td>
          <td className="projectUrl">{project.projectId === this.state.selectedProjectId ?
          <input defaultValue={project.projectUrl} value={this.props.newpath} onChange={changePath}/> : project.projectUrl}</td>
          <td>{project.projectId === this.state.selectedProjectId ?
          <button className="addButton" onClick={addModification}></button> : <button onClick={onEdit} className="editButton"></button>}</td>
          <td>{project.projectId === this.state.selectedProjectId ?
          <button onClick={onCancel} className="cancelButton"></button> : <button onClick={onDelete} className="deleteButton"></button>}</td>
        </tr>
    )
  },
  render: function (response) {
    return (
      <table className="fullTable">
        <tbody>
          {this.props.projectList.map(this.createProjectLine)}
        </tbody>
      </table>
    );
  }
});

module.exports = ProjectTable;
