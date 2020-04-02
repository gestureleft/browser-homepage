import React from 'react';
import Todo from './Todo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <svg className="background-circle" xmlns="http://www.w3.org/2000/svg" width="888" height="888" viewBox="0 0 888 888">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="444" cy="444" r="444" fill="#f2be42" />
      </svg>
      <Todo />
    </div>
  );
}

export default App;
