
const baseURL = 'owu.linkpc.net/carsAPI/v1';

const cars = '/cars';

const urls = {
    cars: {
        base: cars,
        byId: (id) =>  `${cars}/${id}`
    }
}
export {
    baseURL,
    urls
}