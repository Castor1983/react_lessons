import {carsActionsTypes} from "../actions/carsAction";

const initialState = {
    cars: [],
    trigger: true
}
const carsReducer = (state = initialState, action) =>{
    switch (action.type){
        case carsActionsTypes.SET_CARS:
            return{
                ...state,
                cars: action.payload
            }
        case carsActionsTypes.TRIGGER:
            return {
                ...state,
                trigger: action.payload
            }
        default:
            return state
    }


}
export {carsReducer}