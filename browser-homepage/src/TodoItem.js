import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    if (props.value === "") {
        return (
            <div className="TodoItem">
                <div className="value-input" contentEditable="true">
                </div>
                <button className="delete-button" onClick={() => props.onClick()}></button>
            </div>
        );
    } else {
        return (
            <div className="TodoItem">
                <p>
                    {props.value}
                </p>
                <button></button>
            </div>
        );
    }
}

export default TodoItem;