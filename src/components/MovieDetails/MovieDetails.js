import React from 'react';
import {posterURL} from "../../constants/urls";
import css from './MovieDetails.module.css'
const MovieDetails = ({movie}) => {
    const{
         title, backdrop_path, budget, genres,
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
                <div> Genres: {genres?.map(genre=>(<div key={genre.id}>{genre.name}</div>))}</div>
                <div>Original language: {original_language}</div>
                <div>Original title: {original_title}</div>
                <div>Popularity: {popularity}</div>
                {/*<div>{production_companies}</div>*/}
                {/*<div>{production_countries}</div>*/}
                <div>Relise date: {release_date}</div>
                <div>Revenue: {revenue}$</div>
                <div>Runtime: Runtime: {runtime} min.</div>
                <div>Status: {status}</div>
                <div>Tagline: {tagline}</div>
                <div>Vote average: {vote_average}</div>
                <div>Vote count: {vote_count}</div>
            </div>

        </div>
    );
};

export {MovieDetails};