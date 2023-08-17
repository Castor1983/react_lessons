import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../Layouts";
import {CharactersPage, EpisodesPage} from "../pages"
const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes',
                element: <EpisodesPage/>
            },
            {
                path: 'characters',
                element: <CharactersPage/>
            }
        ]
    }
]);

export {
    router
}