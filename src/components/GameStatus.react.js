var React = require('react');
var BoardStore = require('../stores/BoardStore');

var GameStatus = React.createClass({  

  render: function() {
    var statusText = 'Play, play, play!';
    var img;
    if (this.props.winner) {
      statusText = 'Congratulations, we\'ve got a winner! Winner is: ';
      imgsrc = 'static/cross.svg';
      if (this.props.value == 1) {
        imgsrc = 'static/nought.svg';
      }
      img = <img 
          src={imgsrc} 
          width="50" 
          height="50" 
        />;
    }        
    return (
      <p>
        {statusText} {img}
      </p>
    );
  },
});

module.exports = GameStatus;
