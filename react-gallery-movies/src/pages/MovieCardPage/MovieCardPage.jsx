import {useParams} from "react-router-dom";
import {MovieCard} from "../../entities/MovieCard/MovieCard";
import {useEffect, useState} from "react";
import {getMovieById} from "../../shared/api/mockFetchRequest/mockFetchRequest";

export function MovieCardPage() {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getMovie() {
            try {
                setLoading(true);
                const response = await getMovieById(Number(id));
                setMovie({...response});
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        }

        getMovie();
    }, [id]);

    if (loading) {
        return <h1>Loading ...</h1>
    } else {
        return (
            <div>
                <h1>Movie {id}</h1>
                <MovieCard movie={movie} />
                <p>{movie.description}</p>
            </div>
        )
    }
}
