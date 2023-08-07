import {combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {carsReducer} from "./reducers/carsReducer";

    const rootReducer = combineReducers({
        cars: carsReducer,
    })
const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
})
const store = createStore(rootReducer, composeEnhancers())

export {store}