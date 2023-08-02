import {apiPlaceHolderService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getAll: () => apiPlaceHolderService.get(urls.posts),
}

export {postsService}