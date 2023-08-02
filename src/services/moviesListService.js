import {ApimoviesService} from "./apiService";
import {urls} from "../constants/urls";

const moviesListService = {
    getAll: (numberPage)=> ApimoviesService.get(urls.movieList.byPageNumber(numberPage))
}
export {moviesListService}