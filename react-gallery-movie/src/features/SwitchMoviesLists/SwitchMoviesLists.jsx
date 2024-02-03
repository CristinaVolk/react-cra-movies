import {MovieCard} from "../../entitties/MovieCard/MovieCard";
import './SwitchMoviesLists.css';
import {useSwitchMoviesLists} from "./model/useSwitchMoviesLists/useSwitchMoviesLists";

export function SwitchMoviesLists(props) {
    const {isListTypeFavourite} = props;
    const {
        error,
        isLoading,
        renderMovies,
        handleIconClick
    } = useSwitchMoviesLists();


    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <ul>{renderMovies(isListTypeFavourite)
            .map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onIconHandler={handleIconClick}
                />
            ))}</ul>
    )
}
