import PostComponent from './PostComponent/PostComponent.js';
import { useEffect, useState } from 'react';
import { logDOM } from '@testing-library/react';

export const PostContainer = () => {
    const [ posts, setPosts ] = useState(null);




    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);

            })


    },[]);


    const handleDelete = (id) => {
        setPosts([ ...posts ].filter((post) => post.id !== id));
    };

    const handleClick = (value) => {
        alert(`User id is ${value}`);

    };


    return (
        <>
            {posts?.map((post, id) => {
                return (
                    <PostComponent
                        key={id}
                        post={post}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                    />);
            })}
        </>);
};
