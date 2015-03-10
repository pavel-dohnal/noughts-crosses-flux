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

var BoardStore = {
  getAll: function () {
    return board;
  }
};

module.exports = BoardStore;