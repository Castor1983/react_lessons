import React, {useEffect, useState} from 'react';
import {CarComponent} from "../CarComponent/CarComponent";

const CarsConteiner = () => {
const [cars, setCars] = useState([]);

useEffect(()=> {
    fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then((res) => res.json())
        .then(cars => setCars(cars) );
} )
    return (
        <div>
            {cars?.map( car => <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export {CarsConteiner};