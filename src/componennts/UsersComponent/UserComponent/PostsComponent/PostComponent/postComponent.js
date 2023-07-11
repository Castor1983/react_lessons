import React from 'react';

import styles from './PostComponent.module.scss'
const PostComponent = ({post}) => {
    const { id, title, body} = post;

    return (
        <div className={styles.container}>

            <h2> Post id: {id}</h2>
            <h4>Title: {title}</h4>
            <h6>Info: {body}</h6>
        </div>
    );
};

export {PostComponent};