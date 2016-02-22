'use strict';

function DataBaseRequests(query) {
  this.heartBeat = function (cb) {
    query('SELECT ok FROM heartbeat', function (err, result) {
      cb(err, result);
    });
  };

  this.getAllProjects = function (cb) {
    query('SELECT * FROM project', function (err, result) {
      cb(err, result);
    });
  };
}

module.exports = DataBaseRequests;
