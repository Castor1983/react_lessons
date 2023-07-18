import {baseUrl} from "../../api/Endpoints";
import {Endpoints} from "../../api/Endpoints";
import axios from 'axios'
export const CarsServices = {
CarAdd: (car)=> {
    axios.post(baseUrl, {
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

}
}