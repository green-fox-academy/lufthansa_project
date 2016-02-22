'use strict';

module.exports = {
  PORT_FOR_SERVER: process.env.PORT || 3000,
  PORT_FOR_DATABASE: process.env.DATABASE_URL || 'postgres://postgres:greenfox@localhost/lufthansa',
  BACKEND_LEVEL: process.env.BACKEND_LEVEL || 'info',
  LOG_LEVELS: ['debog', 'info', 'warn', 'error'],
};

