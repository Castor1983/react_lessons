import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService";
import {postService} from "../../services/postService";
import {Comment} from "./Comment";
import styles from './Comments.module.css'
import {Outlet} from "react-router";
import {Post} from "../Post/Post";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState([]);


    useEffect(()=> {
        commentsService.getAll().then(value => value.data).then(value => setComments(value))
    }, [])
    const viewPost = () => {
        postService.getById(postId).then(({data}) => <Post post={data}/>)
    }

    return (
        <div className={styles.comments}>
            <Outlet/>
            {comments.map(comment=> <Comment key={comment.id} comment={comment} setPostId={setPostId}/>)}

        </div>
    );
};

export {Comments};