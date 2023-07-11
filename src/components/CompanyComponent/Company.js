import React from 'react';

const Company = ({company}) => {
    const {name, catchPhrase, bs} = company;
    return (
        <div>
            <h4>Company</h4>
            <div>Name: {name}</div>
            <div>CatchPhrase: {catchPhrase}</div>
            <div>Bs: {bs}</div>
        </div>
    );
};

export {Company};