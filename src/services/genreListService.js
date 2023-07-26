import {ApiGenreService} from "./ApiService";
import {urls} from "../constants/urls";

const genreListService = {
    getAll: ()=> ApiGenreService.get(urls.genreList)
}
export {genreListService}