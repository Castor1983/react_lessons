
import {carsActions} from "../actions/carsAction";

const setCarThunk =(car) => (dispatch) =>{
    dispatch (carsActions.setCar(car))
}
export {setCarThunk}