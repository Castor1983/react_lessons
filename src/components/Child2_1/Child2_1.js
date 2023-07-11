import React from 'react';


const Child2_1 = ({post, name}) => {
    const {id, title, body} = post
    return (
        <div>
            <div>Name: {name}</div>
            <div>Post id: {id}</div>
            <div>Title: {title}</div>
            <div>Content: {body}</div>
        </div>
    );
};

export {Child2_1};