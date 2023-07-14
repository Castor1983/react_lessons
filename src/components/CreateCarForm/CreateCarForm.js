import React, {useState} from 'react';
import styles from '../Component.module.css'
import {useForm} from "react-hook-form";

const CreateCarForm = ({setOnCreate}) => {
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

    return (
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

    </form>


    )
};

export {CreateCarForm};