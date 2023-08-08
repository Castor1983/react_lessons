import React, {useContext} from 'react';
import {Context} from "../CarContainer/CarContainer";
import {carService} from "../../services/carService";
import styles from '../Car.module.css'
import {carsActions} from "../../redux/actions/carsAction";
import {useDispatch, useSelector} from "react-redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const {setCarForUpdate} = useContext(Context);
const dispatch = useDispatch()
    //const trigger = useSelector((store)=> store.cars.trigger) todo
    const deleteCar = async ()=> {
        try {
await carService.deleteById(dispatch(carsActions.deleteCarById(id)));
        }catch (e){
            console.log(e.response.data)
        }finally {
           // dispatch(carsActions.setTrigger(trigger)); todo
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