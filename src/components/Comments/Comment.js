import React from 'react';
import styles from './Comments.module.css'
const Comment = ({comment, setPostId}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={styles.comment} onClick={() => setPostId(postId)}>
            <h3>Comment: {id} </h3>
            <div> PostId: {postId}</div>
            <div> Id: {id}</div>
            <div> Name: {name}</div>
            <div> Email: {email}</div>
            <div> Text: {body}</div>
        </div>
    );
};

export {Comment};