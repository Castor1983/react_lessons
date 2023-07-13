import React, {useRef} from 'react';
import styles from "../AddNewUserPage/AddNewUserPage.module.css";

const AddNewCommentPage = () => {
    const postIdRef = useRef('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const commentRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                postId: postIdRef.current.value,
                name: nameRef.current.value,
                email: emailRef.current.value,
                body: commentRef.current.value,

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return (
        <form className={styles.Commentform} onSubmit={handleSubmit}>
            <h1>Add new comment form</h1>
            <label>
                Id post:
                <br/>
                <input type="text" ref={postIdRef}/>
            </label>
            <label>
                Title:
                <br/>
                <input type="text" ref={nameRef}/>
            </label>
            <label>
                Email:
                <br/>
                <input type="text" ref={emailRef}/>
            </label>
            <label>
                Comment:
                <br/>
                <input type="text" ref={commentRef}/>
            </label>

            <button type='submit'>Add New Comment</button>
        </form>
    )

};

export {AddNewCommentPage};