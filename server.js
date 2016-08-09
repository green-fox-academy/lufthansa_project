'use strict';

var config = require('./server/config.js');
var initExpress = require('./server/initExpressServer.js');
var dataBaseConnection = require('./server/dataBaseConnection.js');
console.log(process.env);
var port = config.PORT_FOR_SERVER;
var app = initExpress(dataBaseConnection);

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
