import {carService} from "../../services/carService";
import {carsActions} from "../actions/carsAction";

const deleteCarThunk =( id) => (dispatch) =>{
    carService.deleteById(id, ).then(({data}) =>dispatch (carsActions.deleteCarById(data)))
}
export {deleteCarThunk}