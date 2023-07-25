import React from 'react';
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
const MoviesListCard = ({movie}) => {

    const {original_title, release_date, poster_path} = movie;

    return (
        <div className={css.MoviesListCard}>
            <PosterPreview poster_path ={poster_path}/>
            <div> Title: {original_title}</div>
            <div> release_date: {release_date}</div>
        </div>
    );
};

export {MoviesListCard};