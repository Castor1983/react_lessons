import Post from './PostComponent/Post.js';
import {useEffect, useState} from 'react';
import PostDetails from "./PostComponent/PostDetails";
export const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [show,setShow] = useState(false);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);

            })
    }, []);


    const handleShow = (id) => {
        show ? setShow(false) : setShow(true);
    };

    return (
        <>
            {posts?.map((post, id) => {
                return ( show ?
                        <PostDetails
                            key={id}
                            post={post}
                            handleShow={handleShow}
                        />
                    :<Post
                        key={id}
                        post={post}
                        handleShow={handleShow}
                    />
                );
            })}
        </>);
};
