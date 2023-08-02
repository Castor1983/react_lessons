import styles from './Comments.module.css'
import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {postId, id, name, email, body} = this.props.comment
        return (
            <div className={styles.comment}>
                <h3>Comment: {id} </h3>
                <div> PostId: {postId}</div>
                <div> Id: {id}</div>
                <div> Name: {name}</div>
                <div> Email: {email}</div>
                <div> Text: {body}</div>
            </div>
        );
    }
}

export {Comment};