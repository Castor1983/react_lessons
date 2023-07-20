import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../components/MainPage/MainPage";
import {AppLayout} from "../components/AppLayout/AppLayout";
import {Todos} from "../components/Todos/Todos";
import {Albums} from "../components/Albums/Albums";
import {Comments} from "../components/Comments/Comments";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>Page does not exist</h1>,
        children: [{
            path: "/",
            element: <MainPage/>,
        },
            {
                path: "/todos",
                element: <Todos/>   ,
            },
            {
                path: "/albums",
                element: <Albums/>,
            },
            {
                path: "/comments",
                element: <Comments/>,
            }]
    },

]);