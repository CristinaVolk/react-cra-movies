import {useEffect, useState} from "react";
import {mockFetchRequest} from "../../shared/api/mockFetchRequest/mockFetchRequest";
import {MovieCard} from "../../entities/MovieCard/MovieCard";
import './SwitchMoviesLists.css';

export function SwitchMoviesLists(props) {
    const {isListFavourite} = props;

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const response = await mockFetchRequest();
                setMovies(response);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        }

        getData();
    }, []);

    function renderMoviesList(isListFavourite) {
        return (isListFavourite)
            ? movies.filter(({isFavourite})=> isFavourite)
            : movies
    }

    function saveToFavourites(movieId) {
        const updatedMovies = movies.map(movie => (
            (movie.id === movieId)
            ? {...movie, isFavourite: !movie.isFavourite}
            : {...movie}
        ));
        setMovies(updatedMovies);
    }

    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>Error occurred: {error}</h1>
    }

    return (
        <ul>
            {renderMoviesList(isListFavourite)
                .map(movie => <MovieCard
                    key={movie.id}
                    movie={movie}
                    onIconClick={saveToFavourites}
                />
        )}
        </ul>
    )
}
