import React, { Component } from 'react'
import PropTypes from 'prop-types';
import StarRating from '../StarRating';
import MovieService from '../../services/MovieService';
import StarRatingComponent from 'react-star-rating-component';
import Tooltip from "react-power-tooltip";


class MovieCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.showTooltip = this.showTooltip.bind(this);
    }

    onStarClick(nextValue, prevValue, name) {
        MovieService.rateMovie(name,nextValue);
        this.forceUpdate();

    }

    showTooltip(bool) {
        this.setState({ show: bool })
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
                            <div className="card-footer-badge float-right badge  badge-pill" 
                            onMouseOver={() => this.showTooltip(true)} 
                            onMouseLeave={() => this.showTooltip(false)}>
                                {Math.floor(this.props.movie.rating)}
                                <Tooltip show={this.state.show}>
                                    <span>{this.props.movie.count}</span>
                                </Tooltip>
                            </div>
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