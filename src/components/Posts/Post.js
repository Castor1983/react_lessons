import styles from './Posts.module.css'
import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {userId, id, title, body} = this.props.post
        return (
            <div className={styles.post}>
                <div> userId: {userId}</div>
                <div> Id: {id}</div>
                <div> title: {title}</div>
                <div> Text: {body}</div>
            </div>
        );
    }
}

export {Post};