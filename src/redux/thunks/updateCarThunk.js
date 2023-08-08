import {carService} from "../../services/carService";
import {carsActions} from "../actions/carsAction";

const updateCarThunk =(id, car) => (dispatch) =>{
    carService.updateById(id, car).then(({data}) =>dispatch (carsActions.updateCarById(id, car)))
}
export {updateCarThunk}