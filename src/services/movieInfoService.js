import {ApiService} from "./ApiService";
import {urls} from "../constants/urls";

const moviesInfoService = {
    getAll: (id)=> ApiService.get(urls.movie.byId(id ))
}
export {moviesInfoService}