import React from 'react';
import {useForm} from "react-hook-form";
import styles from '../Car.module.css'
import {useDispatch, useSelector} from "react-redux";
import {createCarThunk} from "../../redux/thunks/createCarThunk";
import {updateCarThunk} from "../../redux/thunks/updateCarThunk";
import {carService} from "../../services/carService";
import {carsActions} from "../../redux/actions/carsAction";

const CarForm = () => {
    const carUpdate = useSelector((store) => store.cars.car)
    const {
        register,
        handleSubmit, setValue,
        reset
    } = useForm();
    if (carUpdate) {
        setValue('id', carUpdate.id)
        setValue('brand', carUpdate.brand)
        setValue('price', carUpdate.price)
        setValue('year', carUpdate.year)
    }

    const dispatch = useDispatch()

    const save = async (car) => {
        try {
            await dispatch(createCarThunk(car))
            reset();
        } catch (e) {

        }
    }
    const update = async (car) => {
        try {
            await carService.updateById(carUpdate.id, car);
            dispatch(carsActions.updateCarById(carUpdate.id, car));
            reset();
        } catch (e) {

        }

    }
    return (
        <div>
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