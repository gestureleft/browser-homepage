import React, { useEffect } from 'react';

import './TodoItem.css';



function TodoItem(props) {

    return (
        <div className="TodoItem">
            <input className="value-input" onChange={props.handleTodoChange} value={props.value}/>
            <button className="delete-button" onClick={() => props.handleDeleteButton()}>X</button>
        </div>
    );
}

export default TodoItem;