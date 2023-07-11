import React from 'react';

import {UserComponent} from "../UserComponent/UserComponent";
const UsersComponent = ({users, setUserId, setName }) => {

    return (
        <div>
            {users.map(user=> <UserComponent key={user.id} user={user} setUserId={setUserId} setName={setName}/> )}
        </div>
    );
};

export {UsersComponent};