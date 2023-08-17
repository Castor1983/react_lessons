import React from 'react';

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";


import {characterActions} from "../../../redux";
import {Character} from "../Character/Character";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state: {ids}} = useLocation();

    useEffect(() => {
        console.log(characters, 'empty');
            dispatch(characterActions.getByIds(ids))
        }, [characters, dispatch])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};