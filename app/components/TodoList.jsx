var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  render: function(){

    var {todos} = this.props;
    var renderTodos = () => {

      /*
        todo.map takes a function and it calls that function
        for every element in the array and whatever you return gets replaced
        SO if I have an array of 1, 2, 3 and in this function I take a value
        and add 1 then I would have array of 2, 3, 4
      */
      return todos.map((todo) => {
        return (
          /*
            When you are iterating over an array and you are generating
            multiple instances of a component you have to give them a unique
            key prop. This key props is used internally by react to keep track
            of individual component
          */
          <Todo key={todo.id} {...todo}/>//spread operator in props
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

module.exports = TodoList;
