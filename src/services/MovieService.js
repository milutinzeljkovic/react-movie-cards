import movies from './movies.json';

export default class MovieService {

    static getMovies() {
        return movies ? movies : [];
    }

    static addMovie(movie) {
        const lastMovieItem = movies[movies.length - 1];
        let id = lastMovieItem.id + 100;
        movie.id = id;
        return movies.push(movie);
    }

    static deleteMovie(movie) {
        const index =  movies.findIndex( m => m.id === movie.id);
        return movies.splice(index,1);
    }
}