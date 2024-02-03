import {movies} from "../data/movies";

export function mockFetchMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(movies.length) {
                resolve(movies);
            } else {
                reject('Error server');
            }
        }, 1000)
    })
}
