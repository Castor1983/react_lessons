import React  from 'react';
import {posterURL} from "../../constants/urls";
import css from './PosterPreview.module.css'
const PosterPreview = ({poster_path}) => {
    return (
        <div className={css.PosterContainer}>
<img src={`${posterURL}${poster_path}`} className={css.PosterPreview}/>
        </div>
    );
};

export {PosterPreview};