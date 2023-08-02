import {apiPlaceHolderService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getById: (postId) => apiPlaceHolderService.get(urls.posts.byId(postId))
}

export {postService}