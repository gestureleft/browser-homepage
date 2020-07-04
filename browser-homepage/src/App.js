import React from 'react';

import Todo from './Todo.js';
import Clock from './Clock.js';
import DailyPictureContainer from './DailyPictureContainer.js';

import { useFirebaseLogin } from './UseFirebaseLogin.js';

import './App.css';

function App() {

  const doLogIn = true;
  const {user, loggedIn} = useFirebaseLogin(doLogIn);

  let renderContent = 'Not Logged In';

  if(loggedIn) {
    renderContent = <div className="App">
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
  }

  console.log(renderContent);

  return (
    renderContent
  );
}

export default App;
