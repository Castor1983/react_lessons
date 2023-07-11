import React, {useEffect, useState} from 'react';

import {PostComponent} from "../PostComponent/PostComponent";

const PostsComponent = ({userId, name}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
    })
    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post} name={name}/>)}
        </div>
    );
};

export {PostsComponent};