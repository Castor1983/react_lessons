import React from 'react';
import styles from './Comments.module.css'
import {useNavigate} from "react-router";
import {AppRoutes} from "../../routing/AppRoutes";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    const navigate = useNavigate();
    const postRoute = (postId) => navigate(AppRoutes.COMMENTS + '/' + postId)
    return (
        <div className={styles.comment} onClick={() =>
            postRoute(postId)
        }>
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