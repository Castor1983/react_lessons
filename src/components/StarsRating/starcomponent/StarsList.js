import React, { useContext } from "react";

import Star from "./Star";
import css from '../StarsRating.module.css'
import { StarRatingContext } from "../StarRating";

function StarsList() {
    const { maxValue } = useContext(StarRatingContext);

    return (
        <div className={css.star_rating}>
            {[...Array(maxValue)].map((star, index) => {
                const value = index + 1;

                return (
                    <Star
                        key={index}
                        value={value}
                    />
                );
            })}
        </div>
    );
}

export default StarsList;