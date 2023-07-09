import {Post} from './PostComponent/Post.js';
import {useEffect, useState} from 'react';
export const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);

            })
    }, []);



    return (
        <>
            {posts.map((post) => {
                return (<Post
                        key={post.id}
                        post={post}
                    />
                );
            })}
        </>);
};
