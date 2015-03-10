var React = require('react');

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
      <td>
        {img}
      </td>
    );
  }

});

module.exports = Row;
