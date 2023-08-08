
const carsActionsTypes = {
    SET_CARS: 'SET_CARS',
    SET_CAR: 'SET_CAR',
    CREATE_CAR: 'CREATE_CAR',
    DELETE_CAR_BY_ID: 'DELETE_CAR_BY_ID',
    UPDATE_CAR_BY_ID: 'UPDATE_CAR_BY_ID'
}
const carsActions = {
    setCars: (data) => ({type: carsActionsTypes.SET_CARS, payload: data}),
    createCar: (car) => ({type: carsActionsTypes.CREATE_CAR, payload: car}),
    setCar: (car) => ({type: carsActionsTypes.SET_CAR, payload: car}),
    deleteCarById: (id) => ({type: carsActionsTypes.DELETE_CAR_BY_ID, payload: id}),
    updateCarById: (id, car) => ({type: carsActionsTypes.UPDATE_CAR_BY_ID, payload: id, car})

}
export {carsActions, carsActionsTypes}