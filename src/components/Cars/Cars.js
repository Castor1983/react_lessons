import React, {useContext, useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import {Car} from "../Car/Car";
import {Context} from "../CarContainer/CarContainer";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const {trigger} = useContext(Context);
    useEffect(() => {
        carService.getAll().then(value=> value.data).then(value => setCars(value))
    }, [trigger])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};