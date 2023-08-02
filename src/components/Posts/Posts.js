import React, {Component} from 'react';
import {Post} from "./Post";
import styles from './Posts.module.css'
import {postsService} from "../../services/postsService";


// eslint-disable-next-line no-undef
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount()
     {
        postsService.getAll().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div className={styles.posts}>

                {this.state.posts.map( post => <Post key={post.id} post={post}/>)    }
            </div>

        );
    }
}


export {Posts};