import styles from "./PostComponent.module.scss";

const Post = (props) => {
    const { post,  handleShow } = props
    return (
        <div className={styles.container}>
            <h6>Post id: {post.id}</h6>
            <h6>Title: {post.title}</h6>
            <button className={styles.button} onClick={()=>handleShow(post.id)}>More info</button>
        </div>
    )
}

export default Post;