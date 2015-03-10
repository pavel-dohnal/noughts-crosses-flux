var React = require('react');
var Position = require('./Position.react');

var Row = React.createClass({  

  render: function() {
    var rowId = this.props.rowId;
    positions = this.props.rowData.positions.map(function (position, index){
      return (
        <Position
          value={position}
          rowId={rowId}
          positionId={index}
        />
      );
    })
    return (
      <tr>
        {positions}
      </tr>
    );
  }

});

module.exports = Row;
