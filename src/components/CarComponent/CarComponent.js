import React from 'react';
import styles from '../Component.module.css'
import {CarServices} from "../../services/ApiServices/ApiServices";

const CarComponent = ({car, setOnDelete, setOnUpdate, setOnCarValues}) => {
    const {id, brand, price, year} = car;
    return (<div className={styles.container}>
        <h2>Car info</h2>
        <div>id: {id}</div>
        <div>brand: {brand}</div>
        <div>price: {price}</div>
        <div>year: {year}</div>
        <button className={styles.button} onClick={() => {
            setOnUpdate(prev => !prev)
            setOnCarValues({id, brand, price, year})
        }
        }>Update Car
        </button>
        <button className={styles.button} onClick={() => {
            CarServices.deleteCar(id, setOnDelete)
        }}
        >Delete Car
        </button>
    </div>);
};

export {CarComponent};