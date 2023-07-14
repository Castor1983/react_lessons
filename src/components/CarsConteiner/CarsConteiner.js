import React, {useState} from 'react';
import {CarsComponent} from "../CarsComponent/CarsComponent";
import {CreateCarForm} from "../CreateCarForm/CreateCarForm";
import styles from "../Component.module.css";

const CarsConteiner = () => {
    const [onCreate, setOnCreate] = useState(null);
    return (
        <div className={styles.wrapper}>
            <CarsComponent onCreate={onCreate}/>
            <CreateCarForm setOnCreate={setOnCreate}/>
        </div>
    );
};

export {CarsConteiner};