'use strict';

jest.autoMockOff()

describe('Main', function() {
  var Main = require('../client/components/Main');
  var TestUtils = require('react-addons-test-utils');
  var ReactDOM = require('react-dom');
  var React = require('react');

  it('should exists', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <Main />
    );
    expect(TestUtils.isCompositeComponent(renderedComponent)).toBeTruthy();
  });
});
