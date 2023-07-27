import React, {useState} from 'react';
import css from './StarsRating.module.css'
const StarRating = (vote_average) => {

    const [rating, setRating] = useState(0);
        const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(10)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "css.on" : "css.off"}
                        onClick={() => setRating(vote_average)}
                        onMouseEnter={() => setHover(vote_average)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export {StarRating};