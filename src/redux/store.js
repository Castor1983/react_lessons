import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import {carsReducer} from "./reducers/carsReducer";
import thunk from "redux-thunk";

    const rootReducer = combineReducers({
        cars: carsReducer,
    })
const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export {store}