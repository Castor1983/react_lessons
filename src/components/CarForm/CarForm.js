import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {Context} from "../CarContainer/CarContainer";
import styles from '../Car.module.css'
import {useDispatch} from "react-redux";
import {createCarThunk} from "../../redux/thunks/createCarThunk";
const CarForm = () => {
    const { carForUpdate, setCarForUpdate} = useContext(Context)
    const {
        register,
        handleSubmit, setValue,
        reset
    } = useForm();

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

const dispatch = useDispatch()
    const save = async (car) => {
        try {
            await  dispatch (createCarThunk(car))
            reset();
        } catch (e) {

        }
    }
    const update = async (car) => {
       try {
           await carService.updateById(carForUpdate.id, car)
           setCarForUpdate();
           reset();
       }catch (e) {

       }

    }
    return (
        <div>
            <form  className={styles.form} onSubmit={handleSubmit(!carForUpdate? save: update)}>
                <label> brand: <input type='text' required={true} placeholder={'brand'} {...register('brand')}/> </label>
                <label> price: <input type='text' required={true}placeholder={'price'} {...register('price')}/> </label>
                <label> year: <input type='text' required={true} placeholder={'year'} {...register('year')}/> </label>
                <button className={styles.button}>{!carForUpdate?'save':'update'}</button>
            </form>
        </div>
    );
};

export {CarForm};