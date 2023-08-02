import {apiMoviesService} from "./apiService";
import {urls} from "../constants/urls";

const moviesInfoService = {
    getAll: (id)=> apiMoviesService.get(urls.movie.byId(id ))
}
export {moviesInfoService}