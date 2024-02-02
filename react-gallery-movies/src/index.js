import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./app/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {appRoutes, pagesTitle} from "./shared/consts/appRoutes";
import {MovieCardPage} from "./pages/MovieCardPage/MovieCardPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: appRoutes.ALL,
                element: <MoviesPage title={pagesTitle[appRoutes.ALL]} />,
            },
            {
                path: appRoutes.FAVOURITE,
                element: <MoviesPage title={pagesTitle[appRoutes.FAVOURITE]} isListFavourite />
            },
            {
                path: ':id',
                element: <MovieCardPage />
            }
        ],
    },
]);


root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);


