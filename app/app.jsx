var React = require('react');
var ReactDOM = require('react-dom');

//Syntax in ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/*
  The above line creates a variable named Route, Router
  and gets its value using require
*/
/*
Code in ES5

var Route = require('react-router').Route;
Similar thing we would have to do for other variables as well
*/


//Load Foundation


//App css
require('style!css!sass!applicationStyles')


$(document).foundation();

ReactDOM.render(
  <p>Boiler Plate Project</p>,
  document.getElementById('app')
);
