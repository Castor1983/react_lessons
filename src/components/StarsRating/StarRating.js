import React from 'react';
import css from './StarsRating.module.css'
const StarRating = ({vote_average}) => {
    const totalStars = Math.floor(vote_average)

    return (
        <div className={css.star_rating}>
            {[...Array(totalStars)].map((star, index) => {
                index += 1;
                return (
                        <span className={css.star} key={index}>&#9733;</span>
                );

            })}
            <p>{vote_average}</p>
        </div>
    );
};

export {StarRating};