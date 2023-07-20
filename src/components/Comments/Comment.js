import React from 'react';
import styles from './Comments.module.css'
const Comment = ({comment}) => {
    const {userId, id, name, email, body} = comment;
    return (
        <div className={styles.comment}>
            <h3>Comment: {id} </h3>
            <div> UserId: {userId}</div>
            <div> Id: {id}</div>
            <div> Name: {name}</div>
            <div> Email: {email}</div>
            <div> Text: {body}</div>
        </div>
    );
};

export {Comment};