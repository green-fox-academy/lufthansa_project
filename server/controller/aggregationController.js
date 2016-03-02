'use strict';

function AggregationController(query) {

  this.aggregate = function (request, response) {
    query.getAllProjectNames(function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        console.log(result.rows);
        response.status(200).json(result.rows);
      }
    });
  };
}

module.exports = AggregationController;
