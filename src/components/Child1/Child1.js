import React from 'react';

import {Child1_1} from "../Child1_1/Child1_1";

const Child1 = ({users, setUserId, setName, showPosts, setShowPosts}) => {

    return (
        <div>
            {users.map(user => <Child1_1 key={user.id}
                                              user={user}
                                              setUserId={setUserId}
                                              setName={setName}
                                              showPosts={showPosts}
                                              setShowPosts={setShowPosts}/>)}
        </div>
    );
};

export {Child1};