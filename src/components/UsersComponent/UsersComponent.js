import React from 'react';

import {UserComponent} from "../UserComponent/UserComponent";

const UsersComponent = ({users, setUserId, setName, showPosts, setShowPosts}) => {

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