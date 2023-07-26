import React, {useEffect, useState} from 'react';
import {genreListService} from "../../services/genreListService";

const GenreBadge = () => {
    const [genre, setGenre] = useState([])

    useEffect(()=> {
genreListService.getAll().then(({data})=> setGenre(data))
    },[])

    return (
        <div>
            GenreBadge
        </div>
    );
};

export {GenreBadge};