import React from 'react';

const UserAddress = ({address}) => {
    const {street, suite, city} = address;
    return (
        <div>
            <h4>Address</h4>
            <div>Street: {street}</div>
            <div>Suite: {suite}</div>
            <div>City: {city}</div>
        </div>
    );
};

export {UserAddress};