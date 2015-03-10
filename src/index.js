/** @jsx React.DOM */
var React = require('react');
var requireStylesheet = require('stylesheets').requireStylesheet;

requireStylesheet(process.env.STATIC_ROOT + 'app.css');

var MyComponent = React.createClass({
  render: function() {
    return <span className="MyComponent">Hello, MyComponent!</span>;
  }
});

module.exports = MyComponent;