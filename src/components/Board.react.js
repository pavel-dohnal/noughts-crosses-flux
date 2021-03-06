var React = require('react');
var BoardStore = require('../stores/BoardStore');
var Row = require('./Row.react');
var GameStatus = require('./GameStatus.react');

var Board = React.createClass({

  getInitialState: function () {
    return BoardStore.getAll();
  },

  componentDidMount: function() {
    BoardStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BoardStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var rows = this.state.rows.map(function (row, index) {
      return (
        <Row
          rowData={row}
          rowId={index}
        />
      );
    });
    return (
      <div>
        <table className="game-board">
          {rows}
        </table>
        <GameStatus 
          winner={this.state.winner}
          player={this.state.player}
        />
      </div>
    );
  },
  _onChange: function() {
    this.setState(BoardStore.getAll());
  }

});

module.exports = Board;
