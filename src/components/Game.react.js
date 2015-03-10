var React = require('react');
var Board = require('./Board.react');

var Game = React.createClass({

  render: function() {
    return (
      <div className="app">
        <Board />
      </div>
    );
  }

});

module.exports = Game;
