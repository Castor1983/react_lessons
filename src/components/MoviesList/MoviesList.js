import React, {useEffect, useState} from 'react';

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesListService} from "../../services/moviesListService";
import css from './MoviesList.module.css'
import {Pagination} from "../Pagination/Pagination";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [numberPage, setNumberPage] = useState([])
    useEffect(() => {
        moviesListService.getAll(numberPage).then(({data}) => setMovies(data.results))

    }, [numberPage]);

    return (
        <div className={css.MoviesList}>
            <button className={css.prevNext}>prev</button>
            <Pagination setNumberPage={setNumberPage} />
            <button className={css.prevNext}>next</button>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList};