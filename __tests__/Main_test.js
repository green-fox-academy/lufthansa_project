'use strict';

jest.autoMockOff()

var Main;
var TestUtils;
var ReactDOM;
var React;

describe('Main', function () {

  beforeEach(function () {
    Main = require('../client/components/Main');
    TestUtils = require('react-addons-test-utils');
    ReactDOM = require('react-dom');
    React = require('react');
  });

  it('should exists', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <Main />
    );
    expect(TestUtils.isCompositeComponent(renderedComponent)).toBeTruthy();
    // 
    // var mainContainer = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'main-container');
    //
    // var h1 = ReactDOM.findDOMNode(renderedh1);
    // expect(mainContainer.type).toBe('div');
  });

});
