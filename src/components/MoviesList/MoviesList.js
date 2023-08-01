import React, {useEffect, useState} from 'react';

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesListService} from "../../services/moviesListService";
import css from './MoviesList.module.css'
import {Pagination} from "../Pagination/Pagination";
import {useNavigate} from "react-router-dom";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [numberPage, setNumberPage] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        moviesListService.getAll(numberPage).then(({data}) => setMovies(data.results))

    }, [numberPage]);

    return (
        <div className={css.MoviesList}>
            {numberPage > 1 ? (<button className={css.prevNext} onClick={() => {
                    setNumberPage(() => numberPage - 1)
                    navigate(`/movieslist/page/${numberPage - 1}`)
                }}>prev</button>) :
                <button disabled>PrevPage</button>}
            <Pagination setNumberPage={setNumberPage}/>
            <button className={css.prevNext} onClick={() => {
                setNumberPage(() => numberPage + 1)
                navigate(`/movieslist/page/${numberPage + 1}`)
            }}>next
            </button>


            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesList};