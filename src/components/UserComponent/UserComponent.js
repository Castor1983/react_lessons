import React from 'react';

import styles from './UserComponent.module.scss'

const UserComponent = ({user, setUserId, setName, showPosts, setShowPosts}) => {
    const {id, name, username, email} = user;
    return (
        <div className={styles.container}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button className={styles.button} onClick={() => {
                setUserId(id)
                setName(name)
                setShowPosts(!showPosts)
            }}>{showPosts ? 'Hide posts' : 'Show posts'}</button>


        </div>
    );
};

export {UserComponent};