import React, {useEffect, useState} from 'react';
import {UserComponent} from "./UserComponent/UserComponent";

const UsersComponent = ({setUserId}) => {
    const [ users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    });

    return (
        <div>
            {users.map(user => <UserComponent key ={user.id} user ={user} setUserId = {setUserId}/>)}
        </div>
    );
};

export {UsersComponent};