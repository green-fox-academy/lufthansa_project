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