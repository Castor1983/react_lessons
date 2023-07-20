import React from 'react';
import styles from './Todos.module.css'

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div className={styles.todo}>
            <h3> do: {id} </h3>
            <div> userId: {userId}</div>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <div> completed: {`${completed}`}</div>

        </div>
    );
};

export {Todo};