import {apiCarsService} from "./apiService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: () => apiCarsService.get(urls.cars),
}

export {carsService}