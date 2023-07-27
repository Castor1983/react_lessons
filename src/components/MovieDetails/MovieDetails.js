import React from 'react';
import {posterURL} from "../../constants/urls";
import css from './MovieDetails.module.css'
const MovieDetails = ({movie}) => {
    const{
         title, backdrop_path, budget, genres, homepage,
        original_language, original_title, overview,
        popularity, production_companies, production_countries, release_date,
        revenue, runtime, status, tagline, vote_average, vote_count} = movie;
    return (
        <div className={css.MovieDetails}>
            <div className={css.title}>
               <h1>{title}</h1>
                <img src={`${posterURL}${backdrop_path}`} className={css.img}/>
            </div>
            <div className={css.textInfo}>
                <div>Overview: {overview}</div>
                <div>Budget: {budget}$</div>
                {/*<div>{genres}</div>*/}
                <div>Homepege: {homepage}</div>
                <div>{original_language}</div>
                <div>Original title: {original_title}</div>
                <div>{popularity}</div>
                {/*<div>{production_companies}</div>*/}
                {/*<div>{production_countries}</div>*/}
                <div>{release_date}</div>
                <div>{revenue}</div>
                <div>{runtime}</div>
                <div>{status}</div>
                <div>{tagline}</div>
                <div>{vote_average}</div>
                <div>{vote_count}</div>
            </div>

        </div>
    );
};

export {MovieDetails};