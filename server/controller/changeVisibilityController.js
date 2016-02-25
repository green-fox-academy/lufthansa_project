'use strict';

function ChangeVisibilityController(query) {

  this.changeVisibility = function (request, response) {
    query.changeVisibility(request.params.id, function (err, result) {
      if (err) {
        response.status(500).json({ 'status': err });
      } else {
        response.status(201).json({ 'status': result.command});
      }
    });
  };
}

module.exports = ChangeVisibilityController;
