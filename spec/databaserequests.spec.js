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
         expect(query).toEqual('SELECT * FROM projects INNER JOIN builds ON (projects.project_id = builds.project_id) WHERE project_is_visible = TRUE');
        }
        
        var dataBaseRequests = new DataBaseRequests(query);
        dataBaseRequests.getAllProjects();
    });
});

describe('get one projects query', function() {
  it('should give back one item', function() {
        
        function query(query) {
         expect(query).toEqual('SELECT * FROM projects INNER JOIN builds ON (projects.project_id = builds.project_id) WHERE builds.project_id = $1');
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
