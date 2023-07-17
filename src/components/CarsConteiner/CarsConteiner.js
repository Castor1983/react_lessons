import React, {useState} from 'react';
import {CarsComponent} from "../CarsComponent/CarsComponent";
import {CreateCarForm} from "../CreateCarForm/CreateCarForm";
import styles from "../Component.module.css";

const CarsConteiner = () => {
    const [onCreate, setOnCreate] = useState(null);
    const [onUpdate, setOnUpdate] = useState(true);
    const [onId, setOnId] = useState(true);
    return (
        <div className={styles.wrapper}>
            <CreateCarForm setOnCreate={setOnCreate} onUpdate={onUpdate} onId={onId}/>
            <CarsComponent onCreate={onCreate} setOnUpdate={setOnUpdate} setOnId={setOnId}/>

        </div>
    );
};

export {CarsConteiner};