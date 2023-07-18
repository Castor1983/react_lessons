import {Endpoints} from "../../api/Endpoints";
import {baseUrl} from "../../api/Endpoints";
import axios from "axios";
const instance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json'}
});
export const NewUserService = {
    createNewUser: (newUser) => {
        instance.post(Endpoints.USERS, {
            body: JSON.stringify(newUser),
        })
            .then((json) => console.log(json.data));
    }
}
export const NewComment = {
    createNewComment: (newComment) => {
        instance.post(Endpoints.COMMENTS, {
            body: JSON.stringify(newComment),
        })
            .then((json) => console.log(json.data));
    }
}