const carsActionsTypes = {
    SET_CARS: 'SET_CARS',
    //TRIGGER: 'TRIGGER', todo
    DELETE_CAR_BY_ID: 'DELETE_CAR_BY_ID'
}
const carsActions = {
    setCars: (data) => ({type: carsActionsTypes.SET_CARS, payload: data}),
    //setTrigger: (trigger) => ({type: carsActionsTypes.TRIGGER, payload: !trigger}),todo
    deleteCarById: (id) => ({type: carsActionsTypes.DELETE_CAR_BY_ID, payload: id}),

}
export {carsActions, carsActionsTypes}