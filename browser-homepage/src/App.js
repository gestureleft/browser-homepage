import React from 'react';
import firebase from 'firebase';

import Todo from './Todo.js';
import Clock from './Clock.js';
import DailyPictureContainer from './DailyPictureContainer.js';

import { firebaseConfig } from './AppConfig.js';

import './App.css';

function App() {

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  return (
    <div className="App">
      <div className="todo-container">
          <div className="green-rectangle"></div>
          <Todo />
      </div>
      <Clock />
      <div></div>
      <div className="col-four-container">
        <DailyPictureContainer />
      </div>
    </div>
  );
}

export default App;
