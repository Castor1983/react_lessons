import {carService} from "../../services/carService";
import {carsActions} from "../actions/carsAction";

const createCarThunk =(car) => (dispatch) =>{
    carService.create(car).then(({data}) =>dispatch (carsActions.createCar(data)))
}
export {createCarThunk}