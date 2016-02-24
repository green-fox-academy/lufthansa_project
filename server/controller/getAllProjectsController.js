'use strict';

function GetAllProjectsController(query) {

  this.getAllProjects = function (request, response) {
    query.getAllProjects(function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        var resultArray = [];
        result.rows.forEach(function (build) {
        var buildToObject = {
          projects: [
            {
              name: build.project_name,
              id: build.project_id,
              lastBuild: {
                status: build.build_status,
                time: build.build_date,
                coverage: {
                  totalLines: build.build_totallines,
                  actualLines: build.build_actuallines,
                },
              },
            },
          ],
          status: build.build_status,
        };

        resultArray.push(buildToObject);
        });
        response.status(200).json(resultArray);
      }
    });
  };
}

module.exports = GetAllProjectsController;
