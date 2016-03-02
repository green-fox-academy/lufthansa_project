'use strict';

function AddProjectController(query) {

  this.addProject = function (request, response) {
    console.log(request.body);

    query.addProject(request.body, function (err) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
        console.log(err);
      } else {
        response.status(200).json({ status:'ok' });
      }
    });
  };
}

module.exports = AddProjectController;
