import {carsActionsTypes} from "../actions/carsAction";

const initialState = {
    cars: [],
}
const carsReducer = (state = initialState, action) =>{
    switch (action.type){
        case carsActionsTypes.SET_CARS:
            return{
                ...state,
                cars: action.payload
            }
        default:
            return state
    }


}
export {carsReducer}