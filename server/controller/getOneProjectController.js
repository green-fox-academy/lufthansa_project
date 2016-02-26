'use strict';

function GetOneProjectController(query) {

	this.getOneProject = function (request, response) {
		query.getOneProject(request.params.id, function (err, result) {
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
              projectUrl: build.project_url,
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
          status: 'ok',
        };
        resultArray.push(buildToObject);
        });
        response.status(200).json(resultArray);
      }
    });
  };
}

module.exports = GetOneProjectController;