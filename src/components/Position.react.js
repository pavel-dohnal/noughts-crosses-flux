var React = require('react');
var action = require('../actions/GameActionCreators.js');

var Row = React.createClass({  

  render: function() {
    var img;
    if (this.props.value != null) {
      imgsrc = 'static/cross.svg';
      if (this.props.value == '1') {
        imgsrc = 'static/nought.svg';
      }
      img = 
        <img 
          src={imgsrc} 
          width="50" 
          height="50" 
        />;
    }    
    return (
      <td 
        onClick={this._onClick}
      >
        {img}
      </td>
    );
  },

  _onClick: function() {
    action.click(this.props.rowId, this.props.positionId);
  }
});


module.exports = Row;
