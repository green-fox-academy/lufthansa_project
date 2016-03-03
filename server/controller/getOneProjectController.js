'use strict';

var resposeTemplate = require('../templateForResponse.js');

function GetOneProjectController(query) {

  this.getOneProject = function (request, response) {
    query.getOneProject(request.params.id, function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        response.status(200).json(resposeTemplate(result)[0]);
      }
    });
  };
}

module.exports = GetOneProjectController;
