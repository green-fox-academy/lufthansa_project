'use strict';

var fetchRequest = function (method, url, requestData, callback) {
  fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requestData }),
  }).then(function (response) {
    if (callback) {
      callback(response);
    }
  }).catch(function (err) {
    console.log(err);
  });
};

module.exports = fetchRequest;
