import {movies} from "./data/movies";

export function mockFetchRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!movies) {
                reject('Server error');
            } else {
                resolve(movies);
            }
        }, 1000)
    })
}

export function getMovieById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const searchedMovie = movies.find(movie => movie.id === id);
            if (!searchedMovie) {
                reject('Movie not found');
            } else {
                resolve(searchedMovie);
            }
        }, 1000)
    })
}
