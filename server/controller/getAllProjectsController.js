'use strict';

var resposeTemplate = require('../templateForResponse.js');

function GetAllProjectsController(query) {

  this.getAllProjects = function (request, response) {
    query.getAllProjects(function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        response.status(200).json(resposeTemplate(result));
      }
    });
  };
}

module.exports = GetAllProjectsController;
