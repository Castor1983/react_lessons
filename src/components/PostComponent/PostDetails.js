
import styles from "./PostComponent.module.scss";

const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={styles.container}>
            <h6>User id: {userId}</h6>
            <h6>Post id: {id}</h6>
            <h6>Title: {title}</h6>
            <h6>info: {body}</h6>

        </div>
    );
}

export {PostDetails};