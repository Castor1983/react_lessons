import {createBrowserRouter} from "react-router-dom";

import {AppRoutes} from "./AppRoutes";
import {AppLayout, MainPage} from "../components";
import CarsPage from "../pages/CarsPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>Page does not exist</h1>,
        children: [{
            path: AppRoutes.MAIN,
            element: <MainPage/>,
        },
            {
                path: AppRoutes.CARS,
                element: <CarsPage/>,
            },
            {
                path: AppRoutes.POSTS,
                element: <PostsPage/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentsPage/>,

            }]
    },

]);