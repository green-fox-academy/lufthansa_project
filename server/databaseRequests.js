'use strict';

function DataBaseRaquests(query){

  this.heartBeat = function (cb) {
    query('SELECT ok FROM heartbeat', function(err, result) {
      console.log(result.rows);
      cb(err, result);
    });
  };
}

module.exports = DataBaseRaquests;