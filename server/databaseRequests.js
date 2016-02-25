'use strict';

function DataBaseRequests(query) {
  this.heartBeat = function (cb) {
    query('SELECT ok FROM heartbeat', function (err, result) {
      cb(err, result);
    });
  };

  this.getAllProjects = function (cb) {
    query('SELECT * FROM projects INNER JOIN builds ON (projects.project_id = builds.project_id)', function (err, result) {
      cb(err, result);
    });
  };

  this.getOneProject = function (id, cb) {
    query('SELECT * FROM projects INNER JOIN builds ON (projects.project_id = builds.project_id) WHERE builds.project_id = $1', [id], function (err, result) {
      cb(err, result);
    });
  };
}

module.exports = DataBaseRequests;
