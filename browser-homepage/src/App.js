import React from 'react';

import Todo from './Todo.js';
import Clock from './Clock.js';
import DailyPictureContainer from './DailyPictureContainer.js';

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
          <div className="todo-container">
            <div className="green-rectangle"></div>
            <Todo />
          </div>
          <div className="hello-container"><h4>Welcome {user.displayName}</h4>
            <Clock /></div>
          <div></div>
          <div className="col-four-container">
            <DailyPictureContainer />
          </div>
        </div>
      </UserContextProvider>
  }

  return (
    renderContent
  );
}

export default App;
