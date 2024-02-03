import {useEffect, useState} from "react";
import {mockFetchMovies} from "../../../../shared/api/mockFetchMovies/mockFetchMovies";

export function useSwitchMoviesLists() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getMoviesData() {
            try {
                setIsLoading(true);
                const response = await mockFetchMovies();
                if (response) {
                    setMovies(response);
                }
                setIsLoading(false);
            } catch (err) {
                setError(err);
            }
        }

        getMoviesData();
    }, []);

    function renderMovies(isListFavourite) {
        return isListFavourite
            ? movies.filter(movie => movie.isFavourite)
            : movies;
    }

    function handleIconClick(movieId) {
        const updatedMovies = movies
            .map(movie => (
                (movie.id === movieId)
                    ? {...movie, isFavourite: !movie.isFavourite}
                    : {...movie}
            ));
        setMovies(updatedMovies);
    }

    return {
        error,
        isLoading,
        renderMovies,
        handleIconClick
    }
}
