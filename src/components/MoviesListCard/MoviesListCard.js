import React from 'react';
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import StarRating from "../StarsRating/StarRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
const MoviesListCard = ({movie}) => {

    const {title, poster_path} = movie;

    return (
        <div className={css.MoviesListCard}>
            <PosterPreview poster_path ={poster_path}/>
            {/*<h2>{title}</h2>*/}
            <GenreBadge/>
            <StarRating/>
        </div>
    );
};

export {MoviesListCard};