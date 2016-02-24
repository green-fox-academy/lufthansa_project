'use strict'

  this.getAllProjects = function (request, response) {
    query.getAllProjects(function (err, result) {
      if (err) {
        response.status(500).json({ 'problem with database connection': err });
      } else {
        var queryResult = {
        projects: [
          {
            name: result.rows[0].project_name,
            id: result.rows[0].project_id,
            lastBuild: {
              time: result.rows[0].build_date,
              coverage: {
                totalLines: result.rows[0].build_totallines,
                actualLines: result.rows[0].build_actuallines,
              },
            },
          },
        ],
        status: result.rows[0].build_status,
      };
        response.status(200).json(queryResult);
      }
    });
  };