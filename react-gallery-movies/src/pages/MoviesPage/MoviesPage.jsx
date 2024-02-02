import {SwitchMoviesLists} from "../../features/SwitchMoviesLists/SwitchMoviesLists";

export function MoviesPage(props){
    const {title, isListFavourite} = props;

    return (
        <>
            <h1>{title}</h1>
            <SwitchMoviesLists isListFavourite={isListFavourite} />
        </>
    )
}
