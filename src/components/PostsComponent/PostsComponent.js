import React, {useEffect, useState} from 'react';

import {PostComponent} from "../PostComponent/PostComponent";
const PostsComponent = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [])
    return (
        <div>
            {posts.map(post=> <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};