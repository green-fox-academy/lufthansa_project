'use strict'

require('../style/modules/navbar.css');
require('../style/modules/container.css');
require('../style/modules/index.css');
import React from 'react';
import {Link} from 'react-router';

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <nav className="navbar">
          <div>
           <Link to="projects">PROJECTS</Link>
          </div>
          <div>
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
