import {Endpoints} from "../../api/Endpoints";
import {baseUrl} from "../../api/Endpoints";
import axios from "axios";

export const NewUserService = {
    createNewUser: (newUser) => {
        axios.post(baseUrl + Endpoints.USERS, {
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((json) => console.log(json));
    }
}
export const NewComment = {
    createNewComment: (newComment) => {
        axios.post(baseUrl + Endpoints.USERS, {
            body: JSON.stringify(newComment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((json) => console.log(json));
    }
}