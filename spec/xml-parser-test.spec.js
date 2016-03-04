'use strict';

var TestReportReader = require('../xml-parser/parser.js');

describe('Test Report Reader', function () {

  it('TestReportReader exists', function () {
    expect(typeof TestReportReader).toBe('function');
  });

  it('createTestReportObject function exists', function () {
    var testReportReader = new TestReportReader();
    expect(typeof testReportReader.createTestReportObject).toBe('function');
  });
});

describe('Test Report Reader', function () {
  it('createTestReportObject extracts required data from test reports', function () {
    var testObject = {
      testsuite:
        { '$':
          {
            errors: '0',
            failures: '1',
            hostname: 'localhost: 00000',
            name: 'Test Suite',
            tests: '3',
            time: '10.00',
          },
          testcase: [
                { '$': { classname: 'testClass.Test.ExtJS', name: 'test-1.t.js', time: '100.000' } },
                { '$': { classname: 'testClass.Test.ExtJS', name: 'test-2.t.js', time: '75.000' } },
                { '$': { classname: 'testClass.Test.ExtJS', name: 'test-3.t.js', time: '55.000' }, failure: [{ _: 'SOME FAIL MESSAGE' }] },
          ],
        },
    };

    var TestReportReader = require('../xml-parser/parser.js');
    var testFile = 'testfile';
    var fs = 'fs';
    var parser = 'fakeparser';
    var testReportReader = new TestReportReader(testFile, fs, parser);
    var formatedTestResults = testReportReader.createTestReportObject(testObject);
    expect(formatedTestResults.testSuiteName).toBe('Test Suite');
    expect(formatedTestResults.testCaseCount).toBe('3');
    expect(formatedTestResults.successCount).toBe('2');
    expect(formatedTestResults.failureCount).toBe('1');
    expect(formatedTestResults.runningTime).toBe('10.00');
    expect(typeof formatedTestResults.testCases).toBe('object');
    expect(formatedTestResults.testCases[1].name).toBe('test-2.t.js');
    expect(formatedTestResults.testCases[2].failure).toBe('SOME FAIL MESSAGE');

  });
});
