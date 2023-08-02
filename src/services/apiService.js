import axios from "axios";
import {baseURL, token} from "../constants/urls";

const apiMoviesService = axios.create({baseURL, headers: {'Authorization': `Bearer ${token}`}});
const apiGenresService = axios.create({baseURL})

export {apiMoviesService, apiGenresService}