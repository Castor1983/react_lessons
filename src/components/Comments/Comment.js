import React from 'react';
import {useNavigate} from "react-router";

import styles from './Comments.module.css'
import {AppRoutes} from "../../routing/AppRoutes";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    const navigate = useNavigate();
    return (
        <div className={styles.comment} onClick={() =>
            navigate(AppRoutes.COMMENTS + `/${postId}`)
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