'use strict';

function DataBaseRequests(query) {
  this.heartBeat = function (cb) {
    query('SELECT ok FROM heartbeat', function (err, result) {
      cb(err, result);
    });
  };

  this.getAllProjects = function (cb) {
    query('SELECT * FROM projects INNER JOIN (SELECT distinct on (project_id) MAX(build_date), project_id, build_id, build_actuallines, build_totallines, build_status FROM builds GROUP BY project_id, build_id, build_actuallines, build_totallines, build_status) AS b ON(b.project_id=projects.project_id) WHERE project_is_visible = TRUE', function (err, result) {
      cb(err, result);
    });
  };

  this.getOneProject = function (id, cb) {
    query('SELECT * FROM projects INNER JOIN (SELECT distinct on (project_id) MAX(build_date), project_id, build_id, build_actuallines, build_totallines, build_status, build_test_report FROM builds GROUP BY project_id, build_id, build_actuallines, build_totallines, build_status, build_test_report) AS b ON(b.project_id=projects.project_id) WHERE project_is_visible = TRUE AND projects.project_id = $1', [id], function (err, result) {
      cb(err, result);
    });
  };

  this.changeVisibility = function (id, cb) {
    query('UPDATE projects SET project_is_visible = false WHERE project_id= $1', [id], function (err, result) {
      cb(err, {'id': id});
    });
  };

  this.updateProjectProperties = function (project, cb) {
    query('UPDATE projects SET project_name=$1, project_url=$2 WHERE project_id= $3', [project.name, project.url, project.id], function (err, result) {
      cb(err, result);
    });
  };

  this.getAllProjectNames = function (cb) {
    query('SELECT project_name, project_is_visible FROM projects', function (err, result) {
      cb(err, result);
    });
  };

  this.addProject = function (projectDetails, cb) {
    query('INSERT INTO projects (project_name, project_url) VALUES ($1, $2)', [projectDetails.name, projectDetails.projectUrl], function (err, result) {
      console.log(result);
      cb(err, result);
    });
  };

  this.addBuild = function (buildDetails, cb) {
    query('INSERT INTO builds(project_id, build_date, build_status, build_totallines, build_actuallines, build_test_report) VALUES($1, $2, $3, $4, $5, $6)', [1, '2016-03-10- 11:45:00', true, 1000, 750, buildDetails.testReport ], function (err, result) {
      console.log(result);
      cb(err, result);
    });
  };
}

module.exports = DataBaseRequests;
