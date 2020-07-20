import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

import './TodoItem.css';

function TodoItem({ todo }) {
    const [todoText, setTodoText] = useState(todo.todoText);

    const onInputChange = (e) => {
        const el = e.target;
        const db = firebase.firestore();
        db.collection("todos").doc(todo.id).set({...todo, todoText: el.textContent});
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection("todos").doc(todo.id).delete();
    }

    return (
        <div className="TodoItem">
            <span contentEditable="true" suppressContentEditableWarning rows="1" className="todoitem-value-input" onInput={e => onInputChange(e)} >
                {todoText}
            </span>
            <button className="delete-button" onClick={onDelete}>X</button>
        </div>
    );
}

export default TodoItem;