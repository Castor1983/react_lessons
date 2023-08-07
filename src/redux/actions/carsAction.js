const carsActionsTypes = {
    SET_CARS: 'SET_CARS',
    TRIGGER: 'TRIGGER'
}
const carsActions = {
    setCars: (cars) => ({type: carsActionsTypes.SET_CARS, payload: cars}),
    setTrigger: (trigger) => ({type: carsActionsTypes.TRIGGER, payload: !trigger})
}
export {carsActions, carsActionsTypes}