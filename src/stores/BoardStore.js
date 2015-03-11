var GameDispatcher = require('../dispatcher/GameDispatcher');
var Constants = require('../constants/GameConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var board = {
    rows: [
        {
          positions: [null, null, null],
        },
        {
          positions: [null, null, null],
        },
        {
          positions: [null, null, null],
        }
      ],
      player: 0,
      winner: false
    };

function checkWinner() {
  if ((board.rows[0].positions[0] == board.player) && (board.rows[0].positions[1] == board.player) && (board.rows[0].positions[2] == board.player)) {
    return true;//first row
  }
  if ((board.rows[1].positions[0] == board.player) && (board.rows[1].positions[1] == board.player) && (board.rows[1].positions[2] == board.player)) {
    return true;//second row
  }
  if ((board.rows[2].positions[0] == board.player) && (board.rows[2].positions[1] == board.player) && (board.rows[2].positions[2] == board.player)) {
    return true;//third row
  }
  if ((board.rows[0].positions[0] == board.player) && (board.rows[1].positions[0] == board.player) && (board.rows[2].positions[0] == board.player)) {
    return true;//first column
  }
  if ((board.rows[0].positions[1] == board.player) && (board.rows[1].positions[1] == board.player) && (board.rows[2].positions[1] == board.player)) {
    return true;//second column
  }
  if ((board.rows[0].positions[2] == board.player) && (board.rows[1].positions[2] == board.player) && (board.rows[2].positions[2] == board.player)) {
    return true;//third column
  }
  if ((board.rows[0].positions[0] == board.player) && (board.rows[1].positions[1] == board.player) && (board.rows[2].positions[2] == board.player)) {
    return true;//first diagonal
  }
  if ((board.rows[0].positions[2] == board.player) && (board.rows[1].positions[1] == board.player) && (board.rows[2].positions[0] == board.player)) {
    return true;//second diagonal
  }
  return false
}

var BoardStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function () {
    return board;
  },

  click: function (x, y) {
    if (board.winner) {
      return;
    }
    board.rows[x].positions[y] = board.player;
    board.winner = checkWinner();
    if (!board.winner) {
      board.player = (board.player + 1) % 2;
    }
  }
});

BoardStore.dispatchToken = GameDispatcher.register(function (action){
  if (action.type === ActionTypes.CLICK) {
    BoardStore.click(action.x, action.y);
    BoardStore.emitChange();
  }
});

module.exports = BoardStore;