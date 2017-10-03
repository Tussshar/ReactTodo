/*
  Why we put our firebase calls in actions and not in components or reducers

  components: components should only worry about rendering themselves and should
  not worry about anything else

  reducers: our reducers are pure function, so if we make asynchronous calls
  to firebase then they wont remain pure function

  so what does thunk do to your redux store?
  Currently all of our action generator returns object and thats not very useful
  because it doesnot give us any room to do anything asynchronous
  If we want to wait for asynchronous call to come back and
  use that data in our object, there is no way to do that
  With thunk though, we can have can have action generators that dont return
  object instead they return functions where we can do some asynchronous flow
*/

import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

/*
  If the file is called index.js then we can write the import statement shown
  above which resembles the following import statement
  import firebase, {firebaseRef} from 'app/firebase/index'
*/
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
