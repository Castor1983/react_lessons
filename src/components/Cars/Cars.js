import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCarsThunk} from "../../redux/thunks/getCarsThunk";

import {Car} from "../Car/Car";

const Cars = () => {
    const cars = useSelector((store) => store.cars.cars)
    const dispatch = useDispatch()
    const getCars = () => dispatch(getCarsThunk())

    useEffect(() => {
        getCars();
    }, [])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};