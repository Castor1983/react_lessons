import styles from "./PostComponent.module.scss";

const Post = (props) => {
    const { post, handleClick, handleDelete } = props
    return (
        <div className={styles.container}>
            <h6>{post.id}</h6>
            <h6>{post.title}</h6>

            <button onClick={()=>handleClick(post.title)}>Show me</button>
            <button onClick={()=>handleDelete(post.id)}>Delete me</button>
        </div>
    )
}

export default Post;