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
  }
};
