import React, {useMemo} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import styles from '../Car.module.css'
import {createCarThunk} from "../../redux/thunks/createCarThunk";
import {updateCarThunk} from "../../redux/thunks/updateCarThunk";


const CarForm = () => {
    const carUpdate = useSelector((store) => store.cars.car)
    console.log(carUpdate);
    const {
        register,
        handleSubmit, setValue,
        reset
    } = useForm();
    useMemo(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    }, [carUpdate])

    const dispatch = useDispatch()
    const createCar = (car) => dispatch(createCarThunk(car))
    const save = (car) => {
        createCar(car)
        reset();
    }
    const update = (car) => {
        updateCar(car);
        reset();

    }
    const updateCar = (car) => dispatch(updateCarThunk(carUpdate.id, car))
    return (
        <div>
            {}
            <form className={styles.form} onSubmit={handleSubmit(!carUpdate ? save : update)}>
                <label> brand: <input type='text' required={true} placeholder={'brand'} {...register('brand')}/>
                </label>
                <label> price: <input type='text' required={true} placeholder={'price'} {...register('price')}/>
                </label>
                <label> year: <input type='text' required={true} placeholder={'year'} {...register('year')}/> </label>
                <button className={styles.button}>{!carUpdate ? 'save' : 'update'}</button>
            </form>
        </div>
    );
};

export {CarForm};