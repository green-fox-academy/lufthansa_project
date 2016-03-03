'use strict';

var fs = require('fs');
var xml2js = require('xml2js');
var testReportXML = './testReport.xml';


function readXML(file) {
  var parser = new xml2js.Parser();
  fs.readFile(file, function(err, data) {
     parser.parseString(data, function (err, result) {

        createTestReportObject(result);
        console.log('Done');
      });
  });
}

function createTestReportObject(result) {
  var testCaseList = [];
  result.testsuite.testcase.forEach(function (tc) {
    var testCaseDetails = {
      name: tc.$.name,
      time: tc.$.time
    };
    if (tc.failure) {
      testCaseDetails.failure = tc.failure;
    }
    if (tc.error) {
      testCaseDetails.error = tc.error;
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
  console.log(testReport);
}

readXML(testReportXML);

