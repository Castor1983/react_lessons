import {useState} from "react";

import {UsersComponent} from "./components/UsersComponent/UsersComponent";
import {PostsComponent} from "./components/PostsComponent/PostsComponent";

const App = () => {
    const [userId, setUserId] = useState(null)
    const [name, setName] = useState(null)
    const [showPosts, setShowPosts] = useState(false)


    return (
        <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>

            <UsersComponent
                setUserId={setUserId}
                setName={setName}
                showPosts={showPosts}
                setShowPosts={setShowPosts}/>
            {showPosts && userId && <PostsComponent userId={userId} name={name}/>}
        </div>
    );
};

export {App};