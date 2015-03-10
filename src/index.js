

var React = require('react');
var Game = require('./components/Game.react');
window.React = React; // export for http://fb.me/react-devtools


React.render(
  <Game />,
  document.getElementById('react')
);
