var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
/*
  Provider lets you provide store to its children
  So the conponent like todoList, even though  they are rendered two components
  deep, can still access attribute on store and use them to render
*/

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


var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

//App css
require('style!css!sass!applicationStyles')


$(document).foundation();

ReactDOM.render(
  /*
    Inside provider we can put any component which we would like to have access
    to our store
  */
  /*
    So now TodoApp component as well as all of its children will have access
    to data on store as well as dispaych action
  */
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
