import React, {useEffect, useState} from 'react';

import {UserComponent} from "../UserComponent/UserComponent";

const UsersComponent = ({setUserId, setName, showPosts, setShowPosts}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])
    return (
        <div>
            {users.map(user => <UserComponent key={user.id}
                                              user={user}
                                              setUserId={setUserId}
                                              setName={setName}
                                              showPosts={showPosts}
                                              setShowPosts={setShowPosts}/>)}
        </div>
    );
};

export {UsersComponent};