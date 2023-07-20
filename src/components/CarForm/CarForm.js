import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {Context} from "../CarContainer/CarContainer";
import styles from '../Car.module.css'

const CarForm = () => {
    const [errors, setErrors] = useState(null);
    const {setTrigger, carForUpdate, setCarForUpdate} = useContext(Context)
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

    const save = async (car) => {
        try {
            await carService.create(car);
            setErrors(null);
            reset();
            setTrigger()
        } catch (e) {
            setErrors(e.response.data)
        }
    }
    const update = async (car) => {
       try {

           await carService.updateById(carForUpdate.id, car)
           setErrors(null);
           setCarForUpdate();
           setTrigger();
           reset();
       }catch (e) {
           setErrors(e.response.data)
       }

    }
    return (
        <div>
            <form  className={styles.form} onSubmit={handleSubmit(!carForUpdate? save: update)}>
                <label> brand: <input type='text' placeholder={'brand'} {...register('brand')}/> </label>
                <label> price: <input type='text' placeholder={'price'} {...register('price')}/> </label>
                <label> year: <input type='text' placeholder={'year'} {...register('year')}/> </label>
                <button className={styles.button}>{!carForUpdate?'save':'update'}</button>
            </form>
            {errors&&<h1>{JSON.stringify(errors)}</h1>}
        </div>
    );
};

export {CarForm};