import {carsActionsTypes} from "../actions/carsAction";

const initialState = {
    car: null,
    cars: []

}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case carsActionsTypes.SET_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case carsActionsTypes.SET_CAR:
            return {
                ...state,
                car: action.payload
            }
        case carsActionsTypes.CREATE_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }

        case carsActionsTypes.DELETE_CAR_BY_ID:
            return {
                ...state,
                cars: state.cars.filter((car) => car.id !== action.payload)
            }
        case carsActionsTypes.UPDATE_CAR_BY_ID:
            return {
                ...state,
                car: null,
                cars: state.cars.map(car => car.id === action.payload.id ? action.payload : car)
            }
        default:
            return state
    }


}
export {carsReducer}