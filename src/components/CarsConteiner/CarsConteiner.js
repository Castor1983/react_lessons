import React, {useState} from 'react';
import {CarsComponent} from "../CarsComponent/CarsComponent";
import {CreateCarForm} from "../CreateCarForm/CreateCarForm";
import styles from "../Component.module.css";

const CarsConteiner = () => {
    const [onCreate, setOnCreate] = useState(null);
    const [onUpdate, setOnUpdate] = useState(true);
    return (
        <div className={styles.wrapper}>
            <CreateCarForm setOnCreate={setOnCreate} onUpdate={onUpdate}/>
            <CarsComponent onCreate={onCreate} setOnUpdate={setOnUpdate}/>

        </div>
    );
};

export {CarsConteiner};