import React, {useEffect, useState} from 'react';
import {genreListService} from "../../services/genreListService";
import {GenreBadge} from "./GenreBadge";

const GenresBadges = ({genre_ids}) => {
    const [genresList, setGenresList] = useState([])
    useEffect(()=> {
genreListService.getAll().then(({data})=> setGenresList(data))

        const genresMovie =[]
        const genres = (genre_ids, genresList) => {
            for (const ids of genre_ids) {
                if(genresList.genres.id.includes(ids)) {
                    genresMovie.push(genresList.genres.name)
                }
                return genresMovie
            }
        }

    },[])

    return (
        <div>
            {/*{genresList.map(genre => <GenreBadge genre={genre}/>)}*/}
        </div>
    );
};

export {GenresBadges};