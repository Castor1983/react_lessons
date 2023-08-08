import {carsActionsTypes} from "../actions/carsAction";

const initialState = {
    cars: [],

}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carsActionsTypes.SET_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case carsActionsTypes.CREATE_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }

        case carsActionsTypes.DELETE_CAR_BY_ID:
            return {
                ...state,
                cars: state.cars.filter((car)=> car.id !== action.payload)
            }
        default:
            return state
    }


}
export {carsReducer}