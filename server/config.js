'use strict';

const ports = {
  SERVER_PORT : process.env.PORT,
  LOCAL_PORT : 3000,
  DATABASE_URL: process.env.DATABASE_URL,
  LOCAL_DATABASE_PORT : 'postgres://postgres:greenfox@localhost/calorie',
  BACKEND_LEVEL : process.env.DEFAULT_LEVEL
};

var PORT_FOR_SERVER = ports.SERVER_PORT || ports.LOCAL_PORT;
var PORT_FOR_DATABASE = ports.DATABASE_URL || ports.LOCAL_DATABASE_PORT;
var BACKEND_LEVEL = ports.BACKEND_LEVEL || 'info';


module.exports = {
  PORT_FOR_SERVER: PORT_FOR_SERVER,
  BACKEND_LEVEL : BACKEND_LEVEL,
  PORT_FOR_DATABASE: PORT_FOR_DATABASE  
};