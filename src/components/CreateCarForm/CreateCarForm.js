import React, {useState} from 'react';
import styles from '../Component.module.css'
import {useForm} from "react-hook-form";
import {CarsServices} from "../../services/ApiServices/ApiServices";


const CreateCarForm = ({setOnCreate, onUpdate, onCarValues}) => {
    const {id, brand, price, year} = onCarValues;
      const {register,
          handleSubmit,
          setValue,
          reset}=useForm();
       const setFormValues = () =>{
          setValue('brand', brand)
          setValue('price', price)
          setValue('year', year)
      }

    const create = (car)=> {
        CarsServices.CarAdd(car);
           setOnCreate(prev => !prev);
        reset()
       }
    const patch = (car)=> {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
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

                    <button className={styles.button} type='submit'>Create New Car</button>

                </form>
                :
                <form className={styles.form} onSubmit={handleSubmit(patch)}>
                    <h1>Update car</h1>
                    <label>
                        Car model:
                        <br/>
                        <input type="text"  {...register('brand')} />
                    </label>
                    <label>
                        Price:
                        <br/>
                        <input type="text"  {...register('price')} />
                    </label>
                    <label>
                        Year:
                        <br/>
                        <input type="text"  {...register('year')} />
                    </label>

                    <button className={styles.button}  type='submit'>Update Car</button>
                </form>

            }
            <button className={styles.set} onClick={()=> setFormValues()}>Set Car</button>
        </div>



    )
};

export {CreateCarForm};