'use strict';

var config = require('./config.js');
var pg = require('pg');
var port = config.PORT_FOR_DATABASE;

function query(query, id, cb) {
  pg.connect(port, function (err, client, done) {
    if (err) {
      cb(err);
    }

    if (cb) {
      client.query(query, id, function (err, result) {
        done();
        cb(err, result);
      });
    } else {
      cb = id;
      client.query(query, function (err, result) {
        done();
        cb(err, result);
      });
    }
  });
}

module.exports = query;
