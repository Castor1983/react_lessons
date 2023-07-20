import React from 'react';
import styles from './Albums.module.css'
const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div className={styles.album}>
            <h3>Album: {id} </h3>
            <div> userId: {userId}</div>
            <div> id: {id}</div>
            <div> title: {title}</div>
        </div>
    );
};

export {Album};