import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {

    constructor(props){
        super(props);

    }

    getMovies(movies){
        return (
            <div className="card-deck">
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie} handleDeleteMovieCard = {this.props.handleDeleteMovie} />)
                }
            </div>
            );
        }


    render() {
        return (
                <div>
                    {this.getMovies(this.props.movies)}
                </div>
        )
    }
}


MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array,
    handleDeleteMovie: PropTypes.func
};

export default MovieList;