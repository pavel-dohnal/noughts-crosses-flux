var React = require('react');
var BoardStore = require('../stores/BoardStore');
var Row = require('./Row.react');

var Board = React.createClass({

  getInitialState: function () {
    return BoardStore.getAll();
  },

  render: function() {
    var rows = this.state.rows.map(function (row) {
      return (
        <Row
          rowData={row}
        />
      );
    });
    return (
      <div>
        <table className="game-board">
          {rows}
        </table>
        <p>
          Play play play
        </p>
      </div>
    );
  }

});

module.exports = Board;
