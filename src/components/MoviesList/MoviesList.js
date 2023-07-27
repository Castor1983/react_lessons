import React, {useEffect, useState} from 'react';

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesListService} from "../../services/moviesListService";
import css from './MoviesList.module.css'
const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState([]);
    useEffect( ()=> {
        moviesListService.getAll(pageNumber).then(({data})=>{
            for (const dataKey in data) {
                if (dataKey === 'results'){
                    setMovies(data[dataKey])
                }
            }
        })
            }, []);

    return (
        <div className={css.MoviesList}>

            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList};