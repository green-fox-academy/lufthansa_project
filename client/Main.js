var React = require('react');
require('./style/modules/navbar.css');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar" role="navigation">
          <div>PROJECTS</div>
          <div>ADMIN</div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
