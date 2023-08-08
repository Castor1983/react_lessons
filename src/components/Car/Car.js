import React, {useContext} from 'react';
import {Context} from "../CarContainer/CarContainer";

import styles from '../Car.module.css'

import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../redux/thunks/deleteCarThunk";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const {setCarForUpdate} = useContext(Context);
const dispatch = useDispatch()
    const deleteCar = async (id)=> {
        try {
await dispatch(deleteCarThunk(id));
        }catch (e){

        }finally {

        }
    }
    return (
        <div className={styles.container}>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button className={styles.button} onClick={()=> setCarForUpdate(car)}>update</button>
            <button className={styles.button} onClick={ ()=> deleteCar()} >delete</button>
        </div>
    );
};

export {Car};