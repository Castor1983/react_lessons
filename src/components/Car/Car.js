import React, {useContext} from 'react';
import {Context} from "../CarContainer/CarContainer";
import {carService} from "../../services/carService";
import styles from '../Car.module.css'

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const {setCarForUpdate, setTrigger} = useContext(Context);

    const deleteCar = async ()=> {
        try {
await carService.deleteById(id);
        }catch (e){
            console.log(e.response.data)
        }finally {
setTrigger()
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