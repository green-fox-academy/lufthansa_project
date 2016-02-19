'use strict';

jest.dontMock('../client/components/Main.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Main = require('../client/components/Main.js');

describe('Main', function() {
  it('should exists', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <Main></Main>
    );
    expect(TestUtils.isCompositeComponent(renderedComponent)).toBeTruthy();
  });
});
