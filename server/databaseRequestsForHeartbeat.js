'use strict';

function DataBaseRequestsForHeartbeat(query) {
  this.heartBeat = function (cb) {
    query('SELECT ok FROM heartbeat', function (err, result) {
      cb(err, result);
    });
  };
}

module.exports = DataBaseRequestsForHeartbeat;
