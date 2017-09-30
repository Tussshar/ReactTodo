var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

//export is for test file
export var Todo = React.createClass({
/*
  The reason we want to keep Todo component around is so that we can test it
  easily without having to create a store and callin provider

  export key word is going to create a property on the object that comes back
  to the user when someone requires the file and they can access the original
  react component.

  This isn't going to get used anywhere but at test file.
  For everyone else we want to access something thats a default, so all of
  our old code doesnot break
*/
  render: function(){

    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    };

    return (
      //Different way to handle onClick event. We could have also created new method in this file
      <div className={todoClassName} onClick={() => {
          //this.props.onToggle(id);
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);//This export expects a store to exist
