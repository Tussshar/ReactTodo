import firebase from 'firebase';

/*
  To get the content of below variable go to your project create on firebase
  i.e. firebase.google.com
  then click project with web/app option. You will find the code for your app

  If you want to change the read and write rules for your app:
  click on Rules tab, make changes and then click publish
*/
var config = {
  apiKey: "AIzaSyCvI2Uu1ZEGM05wEhd8lEQ1v7kANyftFPg",
  authDomain: "react-todo-app-18e5a.firebaseapp.com",
  databaseURL: "https://react-todo-app-18e5a.firebaseio.com",
  projectId: "react-todo-app-18e5a",
  storageBucket: "react-todo-app-18e5a.appspot.com",
  messagingSenderId: "500395575895"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

/*
  The set method also returns a promise so you can do something
  when your data is actually saved into the firebase
*/
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Tushar',
    age: 28
  }
});/*.then(() => {//then is a promise syntax which gives us two function for success and failure
  console.log('Set Worked!');
}, (e) => {
  console.log('Set failed!');
});

*/

/*
Firebase set property

set property would remove all the properties/variables
and create our database from scratch


firebaseRef.set({
  appName: 'Todo Application'
});

firebaseRef.child('user').set({
  name: 'Kale'
});

firebaseRef.child('app').set({
  name: 'React Todo App',
});
*/
/*
firebaseRef.update({
  isRunning: false,
  'app/name': 'React Todo Application' //--> Multipath update
});
*/
/*
  Nested properties are updates in different ways:
  There are 2 ways to fix this
  1. Multipath update
  2. using child
*/
/*
//update also returns a promise
firebaseRef.child('app').update({ //-->child update
  name: 'Todo Application'
}).then(() => {
  console.log('update worked');
}, (e) => {
  console.log('update failed');
});

firebaseRef.update({
  'app/version': '1.0.1',
  'user/name': 'Kale'
});


//remove also returns the promise
firebaseRef.child('app/name').remove();

firebaseRef.child('user').update({
  name: 'Tushar',
  age: null//another way to remove the data i.e. setting it to null
});

//To erase all the data in database
//firebaseRef.remove();

//Fetching data from database
//once would also return promise
firebaseRef.once('value').then((snapshot) => {
  console.log('Got entire database', snapshot.val());
}, (e) => {
  console.log('Unable to fetch value', e);
});

//getting specific property
firebaseRef.child('app').once('value').then((snapshot) => {
  console.log('Got entire database', snapshot.key, snapshot.val());
}, (e) => {
  console.log('Unable to fetch value', e);
});

//Listening to change in our database
/*
  Since this is gonna get called multiple times we cannot use promise,
  instead we can use call back
*/
/*
firebaseRef.on('value', (snapshot) => {
  console.log('Got Value', snapshot.val());
});

//since listener is turned on, for below update we will see got value in console
firebaseRef.update({
  isRunning: true
});

firebaseRef.off();
*/
/*
//This wont print got value for 3rd time
firebaseRef.update({
  isRunning: false
});
//Another way to turn off listener
*/
/*
var logData = (snapshot) => {
  console.log('Got Value', snapshot.val());
};

firebaseRef.on('value', logData);

firebaseRef.off(logData);//Here the advantage is specific listener is removed
*/
//Adding listener to specific property
/*firebaseRef.child('user').on('value', (snapshot) => {
  console.log('User ref changed', snapshot.val());
});

firebaseRef.child('user').update({
  name: 'Tushu'
});

firebaseRef.child('app').update({
  name: 'Something Else!'
});
*/

//Arrays
/*
  Arrays are written in a bit different way in firebase
  Arrays are key value pair, where value is all the property of
  that particular object in arary
*/
/*
todos: {//Arrays are not represent by '[]' instead we use '{}'
  '123': {//'123' is the key for this object in todos array
    text: 'Something'
  }
}
*/

var notesRef = firebaseRef.child('notes');

//various events
//child added event gets fired every time a new child is added to that reference
notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

//child changed event
notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

//child removed event
notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
/*
  push creates a new item at current reference in this case
  a newNote in notes reference and returns that reference to you so that
  you can add some data to it.
*/

/*
  Another way
  var notesRef = firebaseRef.child('notes');
  var newNoteRef = notesRef.push();

  newNoteRef.set({
    text: 'Walk the dog'
  });

*/

console.log('Todo id', newNoteRef.key);
