import React from 'react';
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
const MoviesListCard = ({movie}) => {

    const {original_title, release_date, poster_path} = movie;

    return (
        <div className={css.MoviesListCard}>
            <PosterPreview poster_path ={poster_path}/>
            <h2>{original_title}</h2>
        </div>
    );
};

export {MoviesListCard};