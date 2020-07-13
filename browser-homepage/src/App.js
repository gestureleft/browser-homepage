import React from 'react';

import Todo from './components/Todo.js';
import Clock from './components/Clock.js';
import DailyPictureContainer from './components/DailyPictureContainer.js';
import Toolbar from './components/Toolbar.js';
import Countdown from './components/Countdown.js';

import { useFirebaseLogin } from './UseFirebaseLogin.js';

import './App.css';
import UserContextProvider from './contexts/UserContext.js';

function App() {

  const doLogIn = true;
  const { user, loggedIn } = useFirebaseLogin(doLogIn);
  const { Provider, Consumer } = React.createContext();

  let renderContent = 'Not Logged In';

  if (loggedIn) {
    renderContent =
      <UserContextProvider value={user}>
        <div className="App">
          <div className="toolbar-container">
            <Toolbar />
          </div>
          <div className="main-content-container">
          <div className="todo-container">
            <Todo />
          </div>
          <div className="hello-container"><h4>Welcome {user.displayName}</h4>
            <Clock /></div>
          <div>
            <Countdown />
          </div>
          <div className="col-four-container">
            <DailyPictureContainer />
          </div>
          </div>
        </div>
      </UserContextProvider>
  }

  return (
    renderContent
  );
}

export default App;
