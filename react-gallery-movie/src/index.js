import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./app/App";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/providers/router/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>

);

