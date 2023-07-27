import React, {useState} from 'react';
import css from './StarsRating.module.css'
const StarRating = ({vote_average}) => {
    const totalStars = Math.floor(vote_average)
    const [rating, setRating] = useState(0);
        const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((star, index) => {
                index += 1;
                return (

                        <span className="star" key={index}>&#9733;</span>
                );
            })}
        </div>
    );
};

export {StarRating};