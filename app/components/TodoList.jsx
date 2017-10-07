var React = require('react');
var {connect} = require('react-redux');
/*
  Connect is a companion to provider component
  The provider component provides access to store for all of its children
  but children still needs to specify which data they would like
*/
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({

  render: function(){

    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {

      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if(filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      /*
        todo.map takes a function and it calls that function
        for every element in the array and whatever you return gets replaced
        SO if I have an array of 1, 2, 3 and in this function I take a value
        and add 1 then I would have array of 2, 3, 4
      */
      return filteredTodos.map((todo) => {
        return (
          /*
            When you are iterating over an array and you are generating
            multiple instances of a component you have to give them a unique
            key prop. This key props is used internally by react to keep track
            of individual component
          */
          <Todo key={todo.id} {...todo}/>
          //spread operator in props
            /*
              Because of spread operator every attribute in todo would be passed
              to Todo as its own prop
            */
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  /*
    First argument to connect lets us spcify which pieces of state our
    component wants
  */
  (state) => {
    /*
      return the object of this state that we care about
      we want all the properties so we return state
    */
    return state;
  }
)(TodoList);//TodoList component can request data it would like to render itself
