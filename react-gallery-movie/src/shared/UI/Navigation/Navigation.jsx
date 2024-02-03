import {Link} from "react-router-dom";
import './Navigation.css'
import {appRoutes} from "../../consts/appRoutes";

export function Navigation() {
    return (
        <nav>
            <Link to={appRoutes.ALL}>All Movies</Link>
            <Link to={appRoutes.FAVOURITE}>Favourite Movies</Link>
        </nav>
    )
}
