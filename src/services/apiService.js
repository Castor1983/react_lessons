import axios from "axios";
import {CarsBaseURL, PlaceHolderBaseURL} from "../constants/urls";

const apiPlaceHolderService = axios.create({baseURL: PlaceHolderBaseURL});
const apiCarsService = axios.create({baseURL: CarsBaseURL});


export {apiPlaceHolderService, apiCarsService}