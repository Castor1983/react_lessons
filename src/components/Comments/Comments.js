import React, {Component} from 'react';
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";
import styles from './Comments.module.css'


// eslint-disable-next-line no-undef
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount()
    {
        commentsService.getAll().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div className={styles.comments}>
                {this.state.comments.map( comment => <Comment key={comment.id} comment={comment}/>)    }
            </div>

        );
    }
}


export {Comments};