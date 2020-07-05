import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase';

import './Todo.css';
import TodoItem from './TodoItem.js';

import { UserContext } from './contexts/UserContext.js';

function Todo() {
    const user = useContext(UserContext).state.user;
    const [todos, setTodos] = useState([]);

    const handleTodoInputChange = (index) => {
        // TODO : Implement
        console.log(index);
    };

    useEffect(() => {
        const todosFbRef = firebase.firestore().collection('todos');
        const query = todosFbRef.where('user', '==', user.uid);

        query.get()
            .then((eachTodo) => eachTodo.forEach(todoDoc => {
                const data = todoDoc.data();
                const d = new Date();
                setTodos([{
                    value: data.todo,
                    key: d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString() + d.getMilliseconds().toString()
                }].concat(todos));
            })
            )
    }, [user]);

    useEffect(() => {
        todos.forEach(todoIn => {
            firebase.firestore().collection('todos').doc().set({
                user: user.uid,
                todo: todoIn.value
            });
        });
     }, [todos]);

    console.log(todos);

    const handleNewItem = () => {

        let d = new Date();

        console.log("clicked new item button");

        setTodos([{
            value: "",
            key: d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString() + d.getMilliseconds().toString()
        }].concat(todos));
    }

    const handleDeleteItem = (i) => {
        console.log("Handling delete");
        if (i === 0) {
            setTodos(todos.slice(1,todos.length));
        } else if (i === todos.length-1) {
            setTodos(todos.slice(0,i));
        } else {
            setTodos(todos.slice(0,i).concat(todos.slice(i+1)));
        }
    }

    return (
        <div className="Todo">
            <div className="TodoItem-list-header">
                <h1>
                    Tasks:
                </h1>
            </div>
            <div className="TodoItem-container">
            {todos.map((item, index) =>
            <TodoItem handleTodoChange={() => handleTodoInputChange(index)} value={item.value} key={item.key} handleDeleteButton={() => handleDeleteItem(index)} />
        )}
            </div>
            <button onClick={() => handleNewItem()} className="new-item-button"><svg className="plus-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 492 492" >
                <path d="M465.064,207.566l0.028,0H284.436V27.25c0-14.84-12.016-27.248-26.856-27.248h-23.116
			c-14.836,0-26.904,12.408-26.904,27.248v180.316H26.908c-14.832,0-26.908,12-26.908,26.844v23.248
			c0,14.832,12.072,26.78,26.908,26.78h180.656v180.968c0,14.832,12.064,26.592,26.904,26.592h23.116
			c14.84,0,26.856-11.764,26.856-26.592V284.438h180.624c14.84,0,26.936-11.952,26.936-26.78V234.41
			C492,219.566,479.904,207.566,465.064,207.566z"/>
            </svg>
            </button>

        </div >
    );
}

export default Todo;