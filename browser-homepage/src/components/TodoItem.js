import React, { useState } from 'react';
import firebase from '../firebase';

import './TodoItem.css';

function TodoItem({ todo }) {
    const [todoText, setTodoText] = useState(todo.todoText);

    const onInputChange = (e) => {
        setTodoText(e.target.value);
        const db = firebase.firestore();
        db.collection("todos").doc(todo.id).set({...todo, todoText: e.target.value});
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection("todos").doc(todo.id).delete();
    }

    return (
        <div className="TodoItem">
            <span suppressContentEditableWarning={true} role="textbox" contentEditable className="value-input" onChange={e => onInputChange(e)} >
                {todoText}
            </span>
            <button className="delete-button" onClick={onDelete}>X</button>
        </div>
    );
}

export default TodoItem;