var GameAppDispatcher = require('../dispatcher/GameDispatcher.js');
var Constants = require('../constants/GameConstants');

var ActionTypes = Constants.ActionTypes;

module.exports = {
  click: function (x, y) {
    GameAppDispatcher.dispatch({
      type: ActionTypes.CLICK,
      x: x,
      y: y
    });
  }
}