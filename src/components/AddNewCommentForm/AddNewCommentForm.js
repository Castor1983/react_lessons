
import styles from "../AddNewUserForm/AddNewUserForm.module.css";
import {useForm} from "react-hook-form";

const AddNewCommentForm = () => {
     const {register,handleSubmit, reset} =useForm()
   const addNewComment = (newComment) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
reset()
    }

    return (
        <form className={styles.Commentform} onSubmit={handleSubmit(addNewComment)}>
            <h1>Add new comment</h1>
            <label>
                Id post:
                <br/>
                <input type="text" {...register(    'postId')}/>
            </label>
            <label>
                Title:
                <br/>
                <input type="text" {...register('title')}/>
            </label>
            <label>
                Email:
                <br/>
                <input type="text" {...register('email')}/>
            </label>
            <label>
                Comment:
                <br/>
                <input type="text" {...register('body')}/>
            </label>

            <button type='submit'>Add New Comment</button>
        </form>
    )

};

export {AddNewCommentForm};