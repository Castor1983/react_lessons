import React from 'react';
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarRating} from "../StarsRating/StarRating";
import { GenresBadges} from "../GenresBadges/GenresBadges";
import {useNavigate} from "react-router-dom";
const MoviesListCard = ({movie}) => {
    const navigate = useNavigate()
    const {poster_path, id, vote_average, genre_ids} = movie;
    return (
        <div className={css.MoviesListCard} onClick={()=>navigate(`/movieinfo/${id}`)}>
            <PosterPreview poster_path ={poster_path}/>
            {/*<h2>{title}</h2>*/}
            <GenresBadges genre_ids={genre_ids}/>
            <StarRating vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};