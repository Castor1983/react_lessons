import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";
import styles from './Comments.module.css'

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        commentsService.getAll().then(value => value.data).then(value => setComments(value))
    }, [])
    return (
        <div className={styles.comments}>
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};