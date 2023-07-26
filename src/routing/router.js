import {createBrowserRouter, Navigate} from "react-router-dom";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import {MainLayout} from "../Layouts/MainLayout/MainLayout";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";
import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import {AppRoutes} from "./AppRoutes";
const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <MainLayout/>,
        children: [

            {
                path: AppRoutes.MOVIESPAGE,
                element: <MoviesPage/>
            },
                    {
                        path: AppRoutes.MOVIEINFO,
                        element: <MovieInfo/>
                    }

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