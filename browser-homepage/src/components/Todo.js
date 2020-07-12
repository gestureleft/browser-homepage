import React, { useContext, useState, useEffect } from 'react';
import firebase from '../firebase';

import './Todo.css';
import TodoItem from './TodoItem.js';

import { UserContext } from '../contexts/UserContext.js';

const useFetchTodos = (user) => {

    let [todos, setTodos] = useState([]);



    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("todos").where("user", "==", user.uid).onSnapshot(
            data => {
                const todos = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setTodos(todos);
            }
        );
        return () => unsubscribe();
    }, [user]);

    const handleNewTodo = () => {
        const db = firebase.firestore();
        db.collection("todos").add({ user: user.uid, todoText: "" });
    }

    return { todos, handleNewTodo };
}

function Todo() {
    const user = useContext(UserContext).user;
    const { todos, handleNewTodo } = useFetchTodos(user);

    return (
        <div className="Todo">
            <div className="Todo-scrollable">
                <div className="TodoItem-list-header">
                    <h1>
                        Tasks:
                </h1>
                </div>
                <div className="TodoItem-container">
                    {todos.map(todo =>
                        <TodoItem todo={todo} key={todo.id} />
                    )}
                </div>
            </div>

            <button onClick={handleNewTodo} className="new-item-button">
                <span className="plus-icon">+</span>
            </button>

        </div >
    );
}

export default Todo;