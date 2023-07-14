import React, {useEffect, useState} from 'react';
import {CarComponent} from "../CarComponent/CarComponent";

const CarsComponent = ({onCreate, setFormValues}) => {
const [cars, setCars] = useState([]);
const [onDelete, setOnDelete] = useState(null   );
const [onUpdate, setOnUpdate] = useState(null);

useEffect(()=> {
    fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then((res) => res.json())
        .then(cars => setCars(cars));
}, [onCreate, onDelete, onUpdate])
    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car} setOnDelete={setOnDelete} setOnUpdate={setOnUpdate} setFormValues={setFormValues}/>)}
        </div>
    );
};

export {CarsComponent};