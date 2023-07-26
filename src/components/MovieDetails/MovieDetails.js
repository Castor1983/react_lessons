import React from 'react';
import {posterURL} from "../../constants/urls";

const MovieDetails = ({movie}) => {
    const{id, title,poster_path} = movie;
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <img src={`${posterURL}${poster_path}`}/>
        </div>
    );
};

export {MovieDetails};