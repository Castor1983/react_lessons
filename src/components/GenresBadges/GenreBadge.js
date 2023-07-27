import React from 'react';

const GenreBadge = ({genre}) => {
    const {name} = genre
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {GenreBadge};