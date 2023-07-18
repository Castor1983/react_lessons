import {baseUrl} from "../../api/Endpoints";
import axios from "axios";

const instance = axios.create({
    baseUrL: baseUrl,
    headers: {'Content-type': 'application/json'}
});
export const CarServices = {
    getCars: (setCars) => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then(cars => setCars(cars));
    },
    deleteCar: (id, setOnDelete) => {
        axios.delete(`${baseUrl}/${id}`)
            .then(() => setOnDelete(prev => !prev))
    },
    addCar: (data, setOnCreate) => {
        const {brand, price, year} = data
        instance.post(baseUrl, {
            brand: brand,
            price: price,
            year: year

        })
            .then(() => {
                setOnCreate(prev => !prev)
            })
    },
    updateCar: (id, data, setOnCreate) => {
        const {brand, price, year} = data
        instance.patch(`${baseUrl}/${id}`, {
            brand: brand,
            price: price,
            year: year

        })
            .then(() => {
                setOnCreate(prev => !prev)
            })


    }
}