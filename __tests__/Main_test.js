'use strict';

jest.autoMockOff()

var Main;
var TestUtils;
var ReactDOM;
var React;

describe('Main', function () {
  var renderComponent;


  beforeEach(function () {
    Main = require('../client/components/Main');
    TestUtils = require('react-addons-test-utils');
    ReactDOM = require('react-dom');
    React = require('react');
  });

  it('should exists', function() {
    renderComponent = TestUtils.renderIntoDocument(
      <Main />
    );
    expect(TestUtils.isCompositeComponent(renderComponent)).toBeTruthy();

    var renderMainContainer = TestUtils.findRenderedDOMComponentWithClass(renderComponent, 'main-container');

    var mainContainer = ReactDOM.findDOMNode(renderMainContainer);
    expect(mainContainer.className).toEqual('main-container');
  });

  it('contains links', function() {
    renderComponent = TestUtils.renderIntoDocument(
      <Main />
    );
    var links =  TestUtils.scryRenderedDOMComponentsWithTag(renderComponent, 'a');
    expect(links.length).toBe(2);
  });

  it('contains links', function() {
    renderComponent = TestUtils.renderIntoDocument(
      <Main />
    );
    var links =  TestUtils.scryRenderedDOMComponentsWithTag(renderComponent, 'a');
    expect(links.length).toBe(2);
  });
});
