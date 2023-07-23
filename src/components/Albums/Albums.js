import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services/albumsService";
import {Album} from "./Album";
import styles from './Albums.module.css'

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value))
    }, [])
    return (
        <div className={styles.albums}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};