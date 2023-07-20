import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "../components/AppLayout/AppLayout";
import {Todos} from "../components/Todos/Todos";
import {Albums} from "../components/Albums/Albums";
import {Comments} from "../components/Comments/Comments";
import {AppRoutes} from "./AppRoutes";
import {App} from "../App";
import {Post} from "../components/Post/Post";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>Page does not exist</h1>,
        children: [{
            path: AppRoutes.MAIN,
            element: <App/>,
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