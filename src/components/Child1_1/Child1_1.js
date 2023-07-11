import React from 'react';



const Child1_1 = ({user, setUserId, setName, showPosts, setShowPosts}) => {
    const {id, name, username, email} = user;
    return (
        <div >
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button  onClick={() => {
                setUserId(id)
                setName(name)
                setShowPosts(!showPosts)
            }}>{showPosts ? 'Hide posts' : 'Show posts'}</button>


        </div>
    );
};

export {Child1_1};