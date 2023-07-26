import React, { useContext } from "react";

import { StarRatingContext } from "../StarRating";

function StarRatingLabel() {
    const { rating, labelText } = useContext(StarRatingContext);

    return (
        <div>
            {/*<h4 style={{color: 'blue'}}>Rating</h4>*/}
            {/*{labelText(rating)}*/}
        </div>
    );
}

export default StarRatingLabel;