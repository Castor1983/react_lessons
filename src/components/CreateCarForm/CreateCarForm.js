import React, {useState} from 'react';
import styles from '../Component.module.css'
import {useForm} from "react-hook-form";

const CreateCarForm = ({setOnCreate, onUpdate, onId}) => {
      const {register,
          handleSubmit,
          setValue,
          reset}=useForm();
      const setFormValues = () =>{
          setValue('brand', 'Toyota')
          setValue('price', 10000)
          setValue('year', 2020)
      }

    const create = (car)=> {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then(() => {
            setOnCreate(prev => !prev)
            reset()
        });}
    const patch = (car)=> {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${onId}`, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then(() => {
            setOnCreate(prev => !prev)
            reset()
        });}

    return (
        <div className={styles.wrapper}>
            { onUpdate ?
                <form className={styles.form} onSubmit={handleSubmit(create)}>
                    <h1>Create new car</h1>
                    <label>
                        Car model:
                        <br/>
                        <input type="text" placeholder={'brand'} {...register('brand')} />
                    </label>
                    <label>
                        Price:
                        <br/>
                        <input type="text" placeholder={'0-1000000'} {...register('price')} />
                    </label>
                    <label>
                        Year:
                        <br/>
                        <input type="text" placeholder={'1990-2023'} {...register('year')} />
                    </label>

                    <button type='submit'>Create New Car</button>

                </form> :
                <form className={styles.form} onSubmit={handleSubmit(patch)}>
                    <h1>Update car</h1>
                    <label>
                        Car model:
                        <br/>
                        <input type="text" placeholder={'brand'} {...register('brand')} />
                    </label>
                    <label>
                        Price:
                        <br/>
                        <input type="text" placeholder={'0-1000000'} {...register('price')} />
                    </label>
                    <label>
                        Year:
                        <br/>
                        <input type="text" placeholder={'1990-2023'} {...register('year')} />
                    </label>

                    <button type='submit'>Update Car</button>

                </form>
            }
        </div>



    )
};

export {CreateCarForm};