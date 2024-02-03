import {SwitchMoviesLists} from "../../features/SwitchMoviesLists/SwitchMoviesLists";

export function MoviesPage(props) {
    const {title, isListTypeFavourite} = props;
    return (
        <>
            <h1>{title}</h1>
            <SwitchMoviesLists isListTypeFavourite={isListTypeFavourite} />
        </>
    )
}
