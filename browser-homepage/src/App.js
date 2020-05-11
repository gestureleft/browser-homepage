import React from 'react';
import Todo from './Todo.js';
import Clock from './Clock.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
          <div className="green-rectangle"></div>
          <Todo />
      </div>
      <Clock />
    </div>
  );
}

export default App;
