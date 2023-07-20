import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getById: (postId) => apiService.get(urls.posts.byId(postId))
}

export {postService}