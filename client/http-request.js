'use strict';

var fetchRequest = function (method, url, requestData) {
  fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requestData }),
  });
  console.log('elkuldtem');
};

module.exports = fetchRequest;
