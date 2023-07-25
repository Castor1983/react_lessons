import React, {useEffect, useState} from 'react';

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesListService} from "../../services/moviesListService";

const MoviesList = () => {
    const [movies, setMovies] = useState(null)
    useEffect( ()=> {
        moviesListService.getAll().then(({data})=> console.log(data))
    }, []);
    return (
        <div>
           dsdsfa
        </div>
    );
};

export {MoviesList};