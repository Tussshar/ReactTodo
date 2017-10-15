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
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
