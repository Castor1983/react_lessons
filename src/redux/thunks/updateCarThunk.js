import {carService} from "../../services/carService";
import {carsActions} from "../actions/carsAction";

const updateCarThunk =(id, car) => (dispatch) =>{
    carService.updateById(id, car)
    dispatch (carsActions.updateCarById(id, car))
    console.log(id, car)
}
export {updateCarThunk}