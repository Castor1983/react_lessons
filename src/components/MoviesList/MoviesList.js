import React, {useEffect, useState} from 'react';

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesListService} from "../../services/moviesListService";

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    useEffect( ()=> {
        moviesListService.getAll().then(({data})=>{
            for (const dataKey in data) {
                if (dataKey === 'results'){
                    setMovies(data[dataKey])
                }
            }
        })
            }, []);

    return (
        <div>

            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList};