'use strict';

function AddBuildController(query) {

  this.addBuild = function (request, response) {
    query.addBuild(request.body, function (err) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        response.status(200).json({ status:'ok' });
      }
    });
  };
}

module.exports = AddBuildController;