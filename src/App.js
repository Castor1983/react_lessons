import {useFetch} from "./hooks/useFetch/useFetch";

const App = () => {
const users = '/users';
const posts = '/posts';
const comments = '/comments';

    return (
        <>

            {useFetch(users)}
            {useFetch(posts)}
            {useFetch(comments)}
        </>
    );
};

export {App};