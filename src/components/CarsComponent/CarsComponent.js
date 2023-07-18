import React, {useEffect, useState} from 'react';
import {CarComponent} from "../CarComponent/CarComponent";
import {CarServices} from "../../services/ApiServices/ApiServices";

const CarsComponent = ({onCreate, setOnUpdate, setOnCarValues}) => {
    const [cars, setCars] = useState([]);
    const [onDelete, setOnDelete] = useState(null);

    useEffect(() => {
        CarServices.getCars(setCars)
    }, [onCreate, onDelete])
    return (
        <div>
            {cars.map(car => <CarComponent
                key={car.id} car={car}
                setOnDelete={setOnDelete}
                setOnUpdate={setOnUpdate}
                setOnCarValues={setOnCarValues}/>)}
        </div>
    );
};

export {CarsComponent};