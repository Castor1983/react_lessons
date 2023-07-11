import React, {useEffect, useState} from 'react';

import {Child2_1} from "../Child2_1/Child2_1";

const Child2     = ({userId, name}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
    })
    return (
        <div>
            {posts.map(post => <Child2_1 key={post.id} post={post} name={name}/>)}
        </div>
    );
};

export {Child2};