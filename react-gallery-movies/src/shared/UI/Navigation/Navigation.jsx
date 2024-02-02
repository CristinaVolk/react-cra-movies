import {Link} from "react-router-dom";
import './Navigation.css'

export function Navigation(){
    return (
        <nav>
            <Link to={'all'}>All Movies</Link>
            <Link to={'favourite'}>Favourite Movies</Link>
        </nav>
    )
}
