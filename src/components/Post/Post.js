import React from 'react';
import {useEffect} from "react";
import {useState} from "react";
import {postService} from "../../services/postService";
import {useParams} from "react-router";
import styles from './post.module.css'

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])
    const {userId, id, title, body} = post;

    return (
        <div className={styles.post}>
            <div><b>POST: {id}</b></div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};