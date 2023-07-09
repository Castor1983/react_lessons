import {UsersComponent} from "./componennts/UsersComponent/UsersComponent";
import {useState} from "react";
import {PostsComponent} from "./componennts/UsersComponent/UserComponent/PostsComponent/PostsComponent";

const App = () => {
const [userId, setUserId] = useState(null)
    return (
        <>

            <UsersComponent setUserId = {setUserId}/>
            {userId&&<PostsComponent userId = {userId}/>}

        </>
    );
};

export {App};