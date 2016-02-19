'use strict';

var Logger = require('../client/front-end-logger.js');

describe('frontend logger', function () {

  function TestDate() {}
  TestDate.prototype.toISOString = function () {
    return '2016-00-00T00:00:00.000Z';
  };

  function testLogMethod(logLevel, eventName) {
    return [logLevel, eventName];
  }

  function testConsoleLog(logData) {
    return logData;
  }

  var testURL = 'testURL';

  var logger = new Logger(TestDate, testLogMethod, testConsoleLog, testURL);

  it('logger instance exists', function () {
    expect(typeof logger).toBe('object');
  });

  it('logger.error function exists', function () {
    expect(typeof logger.error).toBe('function');
  });

  it('logger.createlog creates log with date, event name, log level', function () {
    var logger = new Logger(TestDate, testLogMethod, testURL);
    var testLog = logger.createLog('warn', 'testEvent');
    expect(testLog.dateTime).toBe('2016-00-00T00:00:00.000Z');
    expect(testLog.logLevel).toBe('warn');
    expect(testLog.event).toBe('testEvent');
  });

  it('logger.error sends request with proper parameters', function () {
    function testLogMethod(METHOD, url, requestData, callback) {
      expect(METHOD).toBe('POST');
      expect(url).toBe('testURL');
      expect(typeof requestData).toBe('object');
      expect(callback).toBe(null);
    }

    function testConsoleLog(logMessage) {
      expect(logMessage).toBe('log: {"logLevel":"error","dateTime":"2016-00-00T00:00:00.000Z","eventOrigin":"FRONT-END","event":"testEvent"}');
    }

    var logger = new Logger(TestDate, testLogMethod, testConsoleLog, testURL);
    logger.error('testEvent');

  });

});
