import {createBrowserRouter} from "react-router-dom";

import {AppRoutes} from "./AppRoutes";
import {Albums, AppLayout, Comments, MainPage, Post, Todos} from "../components";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>Page does not exist</h1>,
        children: [{
            path: AppRoutes.MAIN,
            element: <MainPage/>,
        },
            {
                path: AppRoutes.TODOS,
                element: <Todos/>,
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments/>,
                children: [
                    {
                        path: AppRoutes.POSTBYID,
                        element: <Post/>
                    }
                ]
            }]
    },

]);