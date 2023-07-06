import Post from './PostComponent/Post.js';
import { useEffect, useState } from 'react';


export const Posts = () => {
    const [ posts, setPosts ] = useState(null);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);

            })
    },[]);


    const handleShow = (id) => {
        setPosts([ ...posts ].filter((post) => post.id !== id));
    };

    return (
        <>
            {posts?.map((post, id) => {
                return (
                    <Post
                        key={id}
                        post={post}
                        handleShow={handleShow}
                    />);
            })}
        </>);
};
