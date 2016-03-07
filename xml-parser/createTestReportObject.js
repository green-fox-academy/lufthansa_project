'use strict';

function createTestReportObject(result) {
  var testCaseList = [];
  result.testsuite.testcase.forEach(function (tc) {
    var testCaseDetails = {
      name: tc.$.name,
      time: tc.$.time,
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


module.exports = createTestReportObject;
