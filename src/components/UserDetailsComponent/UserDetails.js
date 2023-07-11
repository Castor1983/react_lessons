import React from 'react';

const UserDetails = ({id,name,username,email,phone,website}) => {

    return (
        <div>
            <h3>Profile</h3>
<div>User id: {id}</div>
<div>Name: {name}</div>
<div>Username: {username}</div>
<div>Email: {email}</div>
<div>Phone number: {phone}</div>
<div>Website: {website}</div>
        </div>
    );
};

export  {UserDetails};