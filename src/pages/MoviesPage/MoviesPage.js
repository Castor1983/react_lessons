import React from 'react';
import {MoviesList} from "../../components/MoviesList/MoviesList";
import css from './MoviesPage.module.css'
import {Pagination} from "../../components/Pagination/Pagination";
const MoviesPage = () => {
    return (
        <div className={css.MoviesPage}>
            <Pagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};