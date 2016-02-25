'use strict';

function UpdateProjectProperties(query) {

  this.updateProjectProperties = function (request, response) {
    query.updateProjectProperties(request.params.id, function (err, result) {
      if (err) {
        response.status(500).json({ 'status': err });
      } else {
        response.status(201).json({ 'status': result.command});
      }
    });
  };
}

module.exports = UpdateProjectProperties;
