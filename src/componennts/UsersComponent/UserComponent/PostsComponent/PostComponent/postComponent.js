import React from 'react';

import styles from './PostComponent.module.scss'
const PostComponent = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div className={styles.container}>

            <h2>id: {id}</h2>
            <h4>title: {title}</h4>
            <h6>body: {body}</h6>
        </div>
    );
};

export {PostComponent};