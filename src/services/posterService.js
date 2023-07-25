import {ApiPostService} from "./ApiService";
import {urls} from "../constants/urls";

const posterService = {
    getAll: (poster_path)=> ApiPostService.get(urls.poster(poster_path))
}
export {posterService}