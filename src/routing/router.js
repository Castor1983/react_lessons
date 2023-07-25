import {createBrowserRouter, Navigate} from "react-router-dom";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import {MainLayout} from "../Layouts/MainLayout/MainLayout";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";
const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [

            {
                path: '/',
                element: <MoviesPage/>
            },

        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);

export {
    router
}