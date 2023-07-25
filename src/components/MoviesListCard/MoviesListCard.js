import React from 'react';

const MoviesListCard = ({movie}) => {
    const {original_title} = movie;
    return (
        <div>
            <div> Title: {original_title}</div>
        </div>
    );
};

export {MoviesListCard};