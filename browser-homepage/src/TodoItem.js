import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <div className="TodoItem">
            <input className="value-input" contentEditable="true">
            </input>
            <button className="delete-button" onClick={() => props.onClick()}>X</button>
        </div>
    );
}

export default TodoItem;