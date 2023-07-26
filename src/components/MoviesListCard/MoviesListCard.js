import React from 'react';
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import StarRating from "../StarsRating/StarRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {useNavigate} from "react-router-dom";
const MoviesListCard = ({movie}) => {
    const navigate = useNavigate()
    const {title, poster_path, id} = movie;
    return (
        <div className={css.MoviesListCard} onClick={()=>navigate(`/movieinfo/${id}`)}>
            <PosterPreview poster_path ={poster_path}/>
            {/*<h2>{title}</h2>*/}
            <GenreBadge/>
            <StarRating/>
        </div>
    );
};

export {MoviesListCard};