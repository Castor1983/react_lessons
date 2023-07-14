import React, {useEffect, useState} from 'react';
import {CarComponent} from "../CarComponent/CarComponent";

const CarsComponent = ({onCreate, setFormValues, setOnUpdate, setOnId}) => {
const [cars, setCars] = useState([]);
const [onDelete, setOnDelete] = useState(null   );

useEffect(()=> {
    fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then((res) => res.json())
        .then(cars => setCars(cars));
}, [onCreate, onDelete])
    return (
        <div>
            {cars.map(car => <CarComponent
                key={car.id} car={car}
                setOnDelete={setOnDelete}
                setOnUpdate={setOnUpdate}
                setFormValues={setFormValues}
                setOnId={setOnId}/>)}
        </div>
    );
};

export {CarsComponent};