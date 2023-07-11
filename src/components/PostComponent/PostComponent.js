import React from 'react';

import styles from './PostComponent.module.scss'

const PostComponent = ({post, name}) => {
    const {id, title, body} = post
    return (
        <div className={styles.container}>
            <div>Name: {name}</div>
            <div>Post id: {id}</div>
            <div>Title: {title}</div>
            <div>Content: {body}</div>
        </div>
    );
};

export {PostComponent};