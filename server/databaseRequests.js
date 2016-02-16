'use strict';

function dataBaseRequests(query) {

  this.heartBeat = function (cb) {
    query('SELECT ok FROM heartbeat', function (err, result) {
      cb(err, result);
    });
  };
}

module.exports = dataBaseRequests;
