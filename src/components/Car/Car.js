import React from 'react';

import styles from '../Car.module.css'
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../redux/thunks/deleteCarThunk";
import {setCarThunk} from "../../redux/thunks/setCarThunk";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
const dispatch = useDispatch()
    const deleteCar = async (id)=> {
await dispatch(deleteCarThunk(id));
    }
    return (
        <div className={styles.container}>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button className={styles.button} onClick={()=> dispatch(setCarThunk(car))}>update</button>
            <button className={styles.button} onClick={ ()=> deleteCar(id)} >delete</button>
        </div>
    );
};

export {Car};