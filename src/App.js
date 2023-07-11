import {createContext, useEffect, useState} from "react";

import {Child1} from "./components/Child1/Child1";
import {Child2} from "./components/Child2/Child2";

export const UserTransferContext = createContext(null)
const App = () => {
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState(null)
    const [name, setName] = useState(null)
    const [showPosts, setShowPosts] = useState(false)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])

    return (
        <UserTransferContext.Provider value={users, setUSersId, setName ShowPosts, SetShowPosts}>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>

                <Child1 users={users}
                        setUserId={setUserId}
                        setName={setName}
                        showPosts={showPosts}
                        setShowPosts={setShowPosts}/>
                {showPosts && userId && <Child2 userId={userId} name={name}/>}
            </div>
        </UserTransferContext.Provider>

    );
};

export {App};