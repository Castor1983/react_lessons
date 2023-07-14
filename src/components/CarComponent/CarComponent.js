import React from 'react';
import styles from '../Component.module.css'

const CarComponent = ({car, setOnDelete, setFormValues}) => {
    const {id, brand, price, year} = car;
    return (<div className={styles.container}>
            <h2>Car info</h2>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button className={styles.button} onClick={()=> setFormValues()}>Update Car
            </button>
            <button className={styles.button} onClick={() => {
                fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {method: 'DELETE'})
                    .then(() => setOnDelete(prev => !prev))
            }}
            >Delete Car
            </button>
        </div>);
};

export {CarComponent};