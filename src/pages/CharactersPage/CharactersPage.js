import React from 'react';
import {useNavigate} from "react-router";
import {Characters} from "../../components";
import {episodeActions} from "../../redux";
import {useDispatch} from "react-redux";

const CharactersPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                navigate(-1);
                dispatch(episodeActions.setEpisodeTitle(null));}}>Back</button>

            <Characters/>
        </div>
    );
};

export {CharactersPage};