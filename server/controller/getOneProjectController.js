'use strict';

var resposeTemplate = require('../templateForRequest.js');

function GetOneProjectController(query) {

  this.getOneProject = function (request, response) {
    query.getOneProject(request.params.id, function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        response.status(200).json(resposeTemplate(result));
      }
    });
  };
}

module.exports = GetOneProjectController;
