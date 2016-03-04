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
    return isResultArrayEmpty(resultArray);
  }

  function isResultArrayEmpty(resultArray) {
    if (resultArray.length === 0) {
      return {
        status: 'ok'
      };
    } else {
      return resultArrayIsNotEmpty(resultArray);
    }
  }

  function resultArrayIsNotEmpty(resultArray){
    return {
      status: 'error',
      notExistFolder: resultArray
    };
  }

  that.asyncDir = asyncDir;
  return that;
}

module.exports = readFromDirectories;
