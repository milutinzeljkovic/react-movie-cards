import movies from './movies.json';

export default class MovieService {

    static getMovies() {

        movies.forEach(movie => {
            movie.count = 1;
        });

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

    static rateMovie(movieId,rate) {

        const index = movies.findIndex(m => m.id === movieId);
        const cnt = movies[index].count;
        let newRating = cnt * movies[index].rating;
        newRating +=rate;
        const newCnt = cnt + 1;
        newRating /= newCnt;
        
        movies[index].count++;        

        movies[index].rating = newRating;

    }
}