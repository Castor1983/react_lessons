import React from 'react';
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import StarRating from "../StarsRating/StarRating";
const MoviesListCard = ({movie}) => {

    const {title, poster_path} = movie;

    return (
        <div className={css.MoviesListCard}>
            <PosterPreview poster_path ={poster_path}/>
            <h2>{title}</h2>
            <StarRating/>
        </div>
    );
};

export {MoviesListCard};