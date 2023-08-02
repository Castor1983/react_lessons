import {apiPlaceHolderService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiPlaceHolderService.get(urls.comments),
}

export {commentsService}