import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';
import {useDispatch} from "react-redux";
import {episodeActions} from "../../../redux";

const Episode = ({episode}) => {
    const navigate = useNavigate();
const dispatch = useDispatch();
    const {id, name, episode: chapter, characters} = episode;

    return (
        <div className={css.Episode} onClick={() => {
            dispatch(episodeActions.setEpisodeTitle(name));
            navigate('/characters', {state: {ids: characters}})}}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};