var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      //JSON,stringify takes arry and conver it to string
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }//if you dont run anything, undefined gets returned
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    /*
      filter is a built in array method that lets you take an existing array
      and filter it based on certain things. The filter method requires a
      callback. Its first and only argument is a callback function. This callback
      gets called for every item in an array. It gets passed individual item.
      If return true then item would stay in array and if we return false
      then the item would get removed from array
    */
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    /*
      indexOf would return -1 if it wasnt found. If it is greater than -1 then it
      is a success
    */
    filteredTodos = filteredTodos.filter((todo) => {
      var todoText = todo.text.toLowerCase();

      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    //Sort todos with non-completed first
    /*
      sort is also an in built function.
      both the arguments i.e. a and b are todos
    */
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
