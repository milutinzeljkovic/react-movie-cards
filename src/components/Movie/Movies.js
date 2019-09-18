import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: MovieService.getMovies()
        };
        this.deleteMovie = this.deleteMovie.bind(this);
    }

    deleteMovie(movie){       
        MovieService.deleteMovie(movie);
        this.forceUpdate();
    }



    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    render() {
        console.log(MovieService.getMovies())
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} handleDeleteMovie={this.deleteMovie} />
                    </div>
                </div>
            </div>
        );
    }
}