import React from 'react';

const User = ({user}) => {
    const{id, name, age, status}=user
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> age: {age}</div>
            <div> status: {status}</div>
        </div>
    );
};

export {User};