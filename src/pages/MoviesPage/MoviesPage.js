import React from 'react';
import {MoviesList} from "../../components/MoviesList/MoviesList";
import css from './MoviesPage.module.css'
import {Header} from "../../components/Header/Header";
const MoviesPage = () => {
    return (
        <div className={css.MoviesPage}>
            <Header/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};