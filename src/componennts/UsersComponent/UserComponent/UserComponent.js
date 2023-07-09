import React from 'react'

import styles from './UserComponent.module.scss'

const UserComponent = (props) => {
    const {user, setUserId } = props;
    const {id, name, username} = user;
    return (
        <div className={styles.container}>
            <h2>id: {id}</h2>
            <h3>name: {name}</h3>
            <h4>username: {username}</h4>
            <button className={styles.button} onClick={() => setUserId(id)}>Get posts</button>

        </div>
    );
};

export {UserComponent};