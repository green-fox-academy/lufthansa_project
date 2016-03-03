'use strict';

var readFromDirectories = require('../readDirectories')();

function AggregationController(query) {

  this.aggregate = function (request, response) {
    query.getAllProjectNames(function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        var resultArray = [];
        result.rows.forEach(function(build) {
          resultArray.push(build.project_name);
        });
        readFromDirectories.asyncDir(resultArray, function (e) {
          response.status(200).json(e);
        });
      }
    });
  };
}

module.exports = AggregationController;
