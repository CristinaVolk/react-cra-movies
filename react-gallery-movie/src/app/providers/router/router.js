import {createBrowserRouter} from "react-router-dom";
import {App} from "../../App";
import {MoviesPage} from "../../../pages/MoviesPage/MoviesPage";
import {appRoutes} from "../../../shared/consts/appRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: appRoutes.ALL,
                element: <MoviesPage title={"All movies"} />
            },
            {
                path: appRoutes.FAVOURITE,
                element: <MoviesPage title={"Favourite movies"} isListTypeFavourite />
            }
        ],
    },
]);
