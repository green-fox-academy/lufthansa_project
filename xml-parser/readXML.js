'use strict';

var fs = require('fs');
var xml2js = require('xml2js');
var testReportXML = './testReport.xml';
var parser = new xml2js.Parser();

function readXML(file, callback) {
  fs.readFile(file, function (err, data) {
    if (err) {
      throw err;
    }

    parser.parseString(data, function (err, result) {
      return callback(createTestReportObject(result));
    });
  });
}

function createTestReportObject(result) {
  var testCaseList = [];
  result.testsuite.testcase.forEach(function (tc) {
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
    successCount: (result.testsuite.$.tests - result.testsuite.$.failures),
    failureCount: result.testsuite.$.failures,
    runningTime: result.testsuite.$.time,
    testCases: testCaseList,
  };
  return testReport;
}

function forwardTReportObject(testReport) {
  console.log(testReport);
}

readXML(testReportXML, forwardTReportObject);

