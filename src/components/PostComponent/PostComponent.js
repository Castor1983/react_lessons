import React from 'react';

import styles from './PostComponent.module.scss'

const PostComponent = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div className={styles.container}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostComponent};