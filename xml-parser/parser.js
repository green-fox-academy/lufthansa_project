'use strict';

var fs = require('fs');
var xml2js = require('xml2js');
var testReportXML = './testReport.xml';
var parser = new xml2js.Parser();

function TestReportReader(file, fs, parser) {
  this.file = file;
  this.fs = fs;
  this.parser = parser;
}

TestReportReader.prototype.readXML = function (callback) {
  var _this = this;
  this.fs.readFile(this.file, function (err, data) {
    if (err) {
      return callback(err);
    }

    _this.parser.parseString(data, function (parseErr, result) {
      if (parseErr) {
        return callback(parseErr);
      }

      return callback(null, _this.createTestReportObject(result));
    });
  });
};

TestReportReader.prototype.createTestReportObject = function (result) {
  var testCaseList = [];
  result.testsuite.testcase.forEach(function (tc) {
    console.log(tc);
    var testCaseDetails = {
      name: tc.$.name,
      time: tc.$.time,
    };
    if (tc.failure) {
      testCaseDetails.failure = tc.failure[0]._;
    }

    if (tc.error) {
      testCaseDetails.error = tc.error[0]._;
    }

    testCaseList.push(testCaseDetails);
  });

  var testReport = {
    testSuiteName: result.testsuite.$.name,
    testCaseCount: result.testsuite.$.tests,
    successCount: (result.testsuite.$.tests - result.testsuite.$.failures).toString(),
    failureCount: result.testsuite.$.failures,
    runningTime: result.testsuite.$.time,
    testCases: testCaseList,
  };
  return testReport;
};

TestReportReader.prototype.forwardReportObject = function (error, testReport) {
  if (error) {
    console.log(error);
  }

  console.log(testReport);
};

module.exports = TestReportReader;
