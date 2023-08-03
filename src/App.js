import {useFetch} from "./hooks/useFetch/useFetch";

const App = () => {

    return (
        <>

            {useFetch('/users')}
            {useFetch('/posts')}
            {useFetch('/comments')}
        </>
    );
};

export {App};