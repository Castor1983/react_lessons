import React from 'react';

import css from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {episodeActions} from "../../redux";

const Header = () => {
    const {episodeTitle} = useSelector(state => state.episodes);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={css.Header}>
            <div onClick={()=> {
                navigate('');
                dispatch(episodeActions.setEpisodeTitle(null));}}>
                Rick & Morty
            </div>
            {episodeTitle && <div>{episodeTitle}</div>}
        </div>
    );
};

export {Header};