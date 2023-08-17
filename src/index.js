import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {router} from "./router/router";
import {RouterProvider} from "react-router";
import {store} from "./redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>

);

