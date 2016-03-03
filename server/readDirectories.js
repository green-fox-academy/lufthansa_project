'use strict';

var fs = require('fs');

function readFromDirectories() {

  let that = {};

  function asyncDir(projectNamesFromDB, cb) {
    return fs.readdir('./projects', function (err, file) {
      console.log(file);
      if (err) {
        throw err;
      } else {
        return cb(filterDirectory(file, projectNamesFromDB));
      }    
    });
  }

  function filterDirectory(localDirectories, projectNamesFromDB) {
    var resultArray = projectNamesFromDB.filter(function (e) {
      return localDirectories.indexOf(e) === -1;
    });
    return resultArray;
  }

  that.asyncDir = asyncDir;
  return that;
}

module.exports = readFromDirectories;
