import axios from "axios";
import {CarsBaseURL, PlaceHolderBaseURL} from "../constants/urls";

const apiPlaceHolderService = axios.create({PlaceHolderBaseURL});
const apiCarsService = axios.create({CarsBaseURL});


export {apiPlaceHolderService, apiCarsService}