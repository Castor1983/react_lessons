import styles from "./PostComponent.module.scss";

const Post = (props) => {
    const { post,  handleShow } = props
    return (
        <div className={styles.container}>
            <h6>{post.id}</h6>
            <h6>{post.title}</h6>
            <button onClick={()=>handleShow(post.id)}>More info</button>
        </div>
    )
}

export default Post;