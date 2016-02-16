'use strict';

const ports = {
  SERVER_PORT: process.env.PORT,
  LOCAL_PORT: 3000,
  DATABASE_URL: process.env.DATABASE_URL,
<<<<<<< HEAD
  LOCAL_DATABASE_PORT : 'postgres://postgres:greenfox@localhost/lufthansa'
=======
  LOCAL_DATABASE_PORT: 'postgres://postgres:greenfox@localhost/calorie',
>>>>>>> f001f0f182a52de6fd6546fe9129a46ad30e6df0
};

var PORT_FOR_SERVER = ports.SERVER_PORT || ports.LOCAL_PORT;
var PORT_FOR_DATABASE = ports.DATABASE_URL || ports.LOCAL_DATABASE_PORT;

module.exports = {
  PORT_FOR_SERVER: PORT_FOR_SERVER,
  PORT_FOR_DATABASE: PORT_FOR_DATABASE,
};
