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
    var renderComponent = TestUtils.renderIntoDocument(
      <Main />
    );
    expect(TestUtils.isCompositeComponent(renderComponent)).toBeTruthy();

    // var mainText = ReactDOM.findDOMNode(renderComponent).textContent
    // console.log(mainText);

    var mainContainer = TestUtils.findRenderedDOMComponentWithClass(renderComponent, 'main-container');

    var main_container = ReactDOM.findDOMNode(mainContainer);
    console.log(main_container.getDOMNode());
    expect(main_container.type).toBe('div');
  });

});
