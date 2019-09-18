import React, { Component } from 'react'
import PropTypes from 'prop-types';
import StarRating from '../StarRating';
import MovieService from '../../services/MovieService';
import StarRatingComponent from 'react-star-rating-component';

class MovieCard extends Component {

    constructor(props){
        super(props);
    }

    onStarClick(nextValue, prevValue, name) {
        console.log(name,nextValue);
        MovieService.rateMovie(name,nextValue);
        this.forceUpdate();

    }

    render() {
        return (
            <div className="movie-card">
                <div className="movie-card card">
                    <img className="card-img-top" src={this.props.movie.imageUrl} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.movie.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.movie.subtitle}</h6>
                        <p className="text-justify" style={{fontSize: '14px'}}>{this.props.movie.description}</p>
                        { this.props.movie.id > 500 ?  <button onClick = { () => this.props.handleDeleteMovieCard(this.props.movie)}>Delete</button> : null}
                    </div>
                    <div className="card-footer">
                        <div className="clearfix">
                            <div className="float-left mt-1">
                            <StarRatingComponent 
                                name={this.props.movie.id} 
                                starCount={5}
                                value={this.props.movie.rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                            </div>
                            <div className="card-footer-badge float-right badge badge-primary badge-pill">{Math.floor(this.props.movie.rating)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object,
    handleDeleteMovie: PropTypes.func
};

export default MovieCard;