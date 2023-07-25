import React, {useEffect, useState} from 'react';
import {posterService} from "../../services/posterService";
import {posterURL} from "../../constants/urls";

const PosterPreview = ({poster_path}) => {
    return (
        <div>
<img src={`${posterURL}${poster_path}`}/>
        </div>
    );
};

export {PosterPreview};