'use strict'

import React from 'react';
import {Link} from 'react-router';

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <nav className="navbar">
          <div className="projects">
            <Link to="projects">PROJECTS</Link>
          </div>
          <div className="admin">
            <Link to="admin">ADMIN</Link>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
