import {carService} from "../../services/carService";
import {carsActions} from "../actions/carsAction";

const deleteCarThunk =( id) => (dispatch) =>{
    carService.deleteById(id, ).then((id) =>dispatch (carsActions.deleteCarById(id)))
}
export {deleteCarThunk}