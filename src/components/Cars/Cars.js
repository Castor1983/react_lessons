import React, {useEffect} from 'react';
import {carService} from "../../services/carService";
import {Car} from "../Car/Car";

import {useDispatch, useSelector} from "react-redux";
import {carsActionS} from "../../redux/actions/carsAction";

const Cars = () => {
    const cars = useSelector((store)=> store.cars.cars)
    const dispatch = useDispatch()
    useEffect(() => {
        carService.getAll(dispatch).then(value=> value.data).then(value =>dispatch (carsActionS.setCars(value)))
    }, [])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};