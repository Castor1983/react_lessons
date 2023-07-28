import React, {useEffect, useState} from 'react';

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesListService} from "../../services/moviesListService";
import css from './MoviesList.module.css'
import {Pagination} from "../Pagination/Pagination";
import {number} from "prop-types";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [numberPage, setNumberPage] = useState([])

    useEffect(() => {
        moviesListService.getAll(numberPage).then(({data}) => setMovies(data.results))

    }, [numberPage]);

    return (
        <div className={css.MoviesList}>
            <button className={css.prevNext} onClick={()=> setNumberPage(() => numberPage -1)}>prev</button>
            <Pagination setNumberPage={setNumberPage} />
            <button className={css.prevNext} onClick={()=> setNumberPage(() => numberPage +1)}>next</button>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList};