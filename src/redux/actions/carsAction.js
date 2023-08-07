const carsActionsTypes = {
    SET_CARS: 'SET_CARS'
}
const carsActionS = {
    setCars: (cars) => ({type: carsActionsTypes.SET_CARS, payload: cars})
}
export {carsActionS, carsActionsTypes}