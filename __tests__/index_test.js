// 'use strict';
//
// jest.dontMock('../client/index.jsx');
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
//
// const Main = require('../client/index.jsx');
//
// describe('Main', function() {
//   var h1;
//
//   it('should exists', function() {
//     var renderedComponent = TestUtils.renderIntoDocument(
//       <Main />
//     );
//     expect(TestUtils.isCompositeComponent(renderedComponent)).toBeTruthy();
//
//     var renderedh1 = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'h1'
//     );
//
//     h1 = ReactDOM.findDOMNode(renderedh1);
//   });
//
//   it('contain Hello World text', function() {
//     expect(h1.textContent).toEqual("Hello World");
//
//   });
//
// });
