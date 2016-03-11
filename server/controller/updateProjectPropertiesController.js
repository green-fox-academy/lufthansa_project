'use strict';

function UpdateProjectProperties(query) {

  this.updateProjectProperties = function (request, response) {
    console.log(request.body);
    query.updateProjectProperties({id: request.body.id, name: request.body.name, url: request.body.url}, function (err, result) {
      if (err) {
        response.status(500).json({ 'status': err });
      } else {
        response.status(201).json({ status: 'ok'});
      }
    });
  };
}

module.exports = UpdateProjectProperties;
