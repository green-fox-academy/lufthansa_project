'use strict';

var request = require('supertest');
var initExpressServer = require('../server/initExpressServer.js');


describe('when GET req sent', function () {
  var query = function(query, callback) {
    callback(null, { rows: [{}] });
  };
  it('response format should be JSON', function(done) {
    var app = initExpressServer(query);
    request(app)
        .get('/heartbeat')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});

describe('when GET req sent', function () {
  var query = function(query, callback) {
    callback(null, { rows: [{}] });
  };
  it('response format should be JSON', function(done) {
    var app = initExpressServer(query);
    request(app)
        .get('/api/projects')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});

describe('when GET req sent', function () {
  var query = function(query, callback) {
    callback(null, { rows: [{}] });
  };
  it('response format should be JSON', function(done) {
    var app = initExpressServer(query);
    request(app)
        .get('/loglevel')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});