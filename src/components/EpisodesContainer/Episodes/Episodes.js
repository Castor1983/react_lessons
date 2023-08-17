import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodeActions} from "../../../redux";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
            dispatch(episodeActions.all(query.get('page')));
            setQuery(prev => ({...prev, page: prev.get('page')}))
        }
    , [ query, dispatch, setQuery])

    return (
        <div className={css.Episodes}>
            {episodes?.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};