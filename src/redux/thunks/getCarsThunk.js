import {carService} from "../../services/carService";
import {carsActions} from "../actions/carsAction";

const getCarsThunk =() => (dispatch) =>{
    carService.getAll().then(({data}) =>dispatch (carsActions.setCars(data)))
}
export {getCarsThunk}