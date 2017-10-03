import firebase from 'firebase';

/*
  To get the content of config variable go to your project create on firebase
  i.e. firebase.google.com
  then click project with web/app option. You will find the code for your app

  If you want to change the read and write rules for your app:
  click on Rules tab, make changes and then click publish

  For Todo app, both read and write are made as true
*/

try{
  var config = {
    apiKey: "AIzaSyCvI2Uu1ZEGM05wEhd8lEQ1v7kANyftFPg",
    authDomain: "react-todo-app-18e5a.firebaseapp.com",
    databaseURL: "https://react-todo-app-18e5a.firebaseio.com",
    projectId: "react-todo-app-18e5a",
    storageBucket: "react-todo-app-18e5a.appspot.com",
    messagingSenderId: "500395575895"
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
