'use strict';

function HeartBeatController(query) {
  var _this = this;

  this.getHeartBeat = function (request, response) {
    query.heartBeat(function (err, result) {
      _this.heartBeatResponse(err, result, response);
    });
  };

  this.heartBeatResponse = function (err, result, response) {
    if (err) {
      response.status(500).json({ 'problem with connection': err });
    } else {
      response.status(200).json(result.rows);
    }
  };

  this.getAllProjects = function (request, response) {
    query.getAllProjects(function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        response.status(200).json(result.rows);
      }
    });
  };

}

module.exports = HeartBeatController;
