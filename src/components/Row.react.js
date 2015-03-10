var React = require('react');
var Position = require('./Position.react');

var Row = React.createClass({  

  render: function() {
    positions = this.props.rowData.positions.map(function (position){
      return (
        <Position
          value={position}
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
