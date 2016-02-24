'use strict';

function GetOneProjectController(query) {

	this.getOneProject = function (request, response) {
		query.getOneProject(function (err, result) {
			if (err) {
				response.status(500).json({ 'problem with database connection': err });
			} else {
				var queryResult = [
				{
					name: result.rows[0].project_name,
					id: result.rows[0].project_id,
					lastBuild: {
						status: result.rows[0].build_status,
						date: result.rows[0].build_date,
						coverage: {
							totalLines: result.rows[0].build_totallines,
							actualLines: result.rows[0].build_actuallines,
						},
					}
				}
				]
				response.status(200).json(queryResult);
			}
		});
	};
}

module.exports = GetOneProjectController;