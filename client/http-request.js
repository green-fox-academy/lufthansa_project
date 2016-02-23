'use strict';

var fetchRequest = function (method, url, requestData, callback) {
  var config = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  if (requestData) {
    config.body = JSON.stringify(requestData);
  }
  fetch(url, config).then(function (response) {
    console.log(response);
    return response.json();
  }).then(function (json) {
    if (callback) {
      callback(json);
    }
  }).catch(function (err) {
    console.log(err.stack);
  });
};

module.exports = fetchRequest;
