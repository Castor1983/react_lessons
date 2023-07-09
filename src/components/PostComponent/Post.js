import styles from "./PostComponent.module.scss";
import {useState} from "react";
import {PostDetails} from "./PostDetails";

const Post = ({post}) => {
    const [show,setShow] = useState(false);
    const { id, title } = post;
    return (
        <div className={styles.container}>
            <h6>Post id: {id}</h6>
            <h6>Title: {title}</h6>
            <button className={styles.button} onClick={()=> setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
            {
                show&& <PostDetails post = {post}/>
            }
        </div>
    )
}

export {Post};