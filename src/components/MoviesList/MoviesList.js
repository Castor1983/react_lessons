import React, {useEffect, useState} from 'react';

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesListService} from "../../services/moviesListService";
import css from './MoviesList.module.css'
import {Pagination} from "../Pagination/Pagination";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [ totalPages, setTotalPages]= useState(null)
    const [numberPage, setNumberPage] = useState([])
    useEffect(() => {
        moviesListService.getAll(numberPage).then(({data}) => {
            for (const dataKey in data) {
                if (dataKey === 'results') {
                    setMovies(data[dataKey])
                } else if (dataKey === 'total_pages') {
                    setTotalPages(data[dataKey])
                }
            }
        })
    }, [numberPage]);

    return (
        <div className={css.MoviesList}>
            <Pagination totalPages={totalPages} setNumberPage={setNumberPage} />
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList};