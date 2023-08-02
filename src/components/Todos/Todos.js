import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/carsService";
import {Todo} from "./Todo";
import styles from './Todos.module.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => setTodos(value))
    }, [])
    return (
        <div className={styles.todos}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};