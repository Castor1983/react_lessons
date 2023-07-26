import React  from 'react';
import {posterURL} from "../../constants/urls";
import css from './PosterPreview.module.css'
import {AppRoutes} from "../../routing/AppRoutes";
import {useNavigate, useParams} from "react-router-dom";


const PosterPreview = ({poster_path}) => {

    const {id} = useParams();
    console.log(id)
    return (
        <div className={css.PosterContainer} >
<img src={`${posterURL}${poster_path}`} className={css.PosterPreview}/>
        </div>
    );
};

export {PosterPreview};