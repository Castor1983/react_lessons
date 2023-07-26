import React, {useEffect, useState} from 'react';
import css from './MovieInfo.module.css'
import {moviesInfoService} from "../../services/movieInfoService";
import {useParams} from "react-router-dom";
import {MovieDetails} from "../MovieDetails/MovieDetails";
const MovieInfo = () => {
    const [movie, setMovie] = useState([])
    const{id} = useParams()
    useEffect(()=> {
        moviesInfoService.getAll(id).then(({data})=> setMovie(data))
    }, [])

    return (
        <div className={css.MovieInfo}>
<MovieDetails movie={movie}/>
        </div>
    );
};

export {MovieInfo};