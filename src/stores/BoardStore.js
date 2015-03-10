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
      ]
    };

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
    board.rows[x].positions[y] = 1;
  }
});

BoardStore.dispatchToken = GameDispatcher.register(function (action){
  if (action.type === ActionTypes.CLICK) {
    BoardStore.click(action.x, action.y);
    BoardStore.emitChange();
  }
});

module.exports = BoardStore;