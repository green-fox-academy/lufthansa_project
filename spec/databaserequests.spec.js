'use strict';

var DataBaseRequests = require('../server/databaseRequests');

describe('heartbeat', function() {
  it('should give back one item', function() {

        function query(query) {
         expect(query).toEqual('SELECT ok FROM heartbeat');
        }

        var dataBaseRequests = new DataBaseRequests(query);
        dataBaseRequests.heartBeat();
    });
});

describe('get all projects query', function() {
  it('should give back one item', function() {

        function query(query) {
         expect(query).toEqual('SELECT * FROM projects INNER JOIN (SELECT distinct on (project_id) MAX(build_date), project_id, build_id, build_actuallines, build_totallines, build_status FROM builds GROUP BY project_id, build_id, build_actuallines, build_totallines, build_status) AS b ON(b.project_id=projects.project_id) WHERE project_is_visible = TRUE');
        }

        var dataBaseRequests = new DataBaseRequests(query);
        dataBaseRequests.getAllProjects();
    });
});

describe('get one projects query', function() {
  it('should give back one item', function() {

        function query(query) {
         expect(query).toEqual('SELECT * FROM projects INNER JOIN (SELECT distinct on (project_id) MAX(build_date), project_id, build_id, build_actuallines, build_totallines, build_status, build_test_report FROM builds GROUP BY project_id, build_id, build_actuallines, build_totallines, build_status, build_test_report) AS b ON(b.project_id=projects.project_id) WHERE project_is_visible = TRUE AND projects.project_id = $1');
        }

        var dataBaseRequests = new DataBaseRequests(query);
        dataBaseRequests.getOneProject();
    });
});

describe('get one projects query', function() {
  it('should give back one item', function() {

        function query(query) {
         expect(query).toEqual('UPDATE projects SET project_is_visible = false WHERE project_id= $1');
        }

        var dataBaseRequests = new DataBaseRequests(query);
        dataBaseRequests.changeVisibility();
    });
});
