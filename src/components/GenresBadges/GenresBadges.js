import React, {useEffect, useState} from 'react';
import {genreListService} from "../../services/genreListService";
import {GenreBadge} from "./GenreBadge";
import css from './GenresBadges.module.css'
const GenresBadges = ({genre_ids}) => {
    const [genresList, setGenresList] = useState([])
    useEffect(() => {
        genreListService.getAll()
            .then(({data}) => setGenresList(data.genres.filter(value => genre_ids.includes(value.id))))
    }, [])
    return (
        <div className={css.GenresBadges}>
            {genresList.map(genre => <GenreBadge  key={genre.id} genre={genre} genre_ids={genre_ids}/>)}
        </div>
    );
};

export {GenresBadges};