import {baseUrl} from "../../api/Endpoints";
import axios from "axios";


export const CarServices = {
    getCars: (setCars) => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then(cars => setCars(cars));
    },
    deleteCar: (id, setOnDelete) => {
        fetch(`${baseUrl}/${id}`, {method: 'DELETE'})
            .then(() => setOnDelete(prev => !prev))
    },
    addCar: (car, setOnCreate) => {
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then(() => {
                setOnCreate(prev => !prev)
            })
    },
    updateCar: (id, car) => {
        fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(car),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())

    }
}