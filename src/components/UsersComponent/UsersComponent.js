import React from 'react';

import {UserComponent} from "../UserComponent/UserComponent";
const UsersComponent = ({users, setUserId }) => {

    return (
        <div>
            {users.map(user=> <UserComponent key={user.id} user={user} setUserId={setUserId}/> )}
        </div>
    );
};

export {UsersComponent};