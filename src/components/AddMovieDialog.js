import React, { Component } from 'react'
import MovieService from '../services/MovieService';


export default class AddMovieDialog extends Component {

    constructor(props){
        super(props);
        this.state = {
            imageUrl: '',
            title: '',
            subtitle: '',
            description: ''
        };

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let error = false;
        if(this.state.imageUrl === ''){
            alert('Insert image path!');
            error = true;
        }
        if(this.state.description === ''){
            alert('Insert description!');
            error = true;
        }
        if(this.state.title === ''){
            alert('Inert title!');
            error = true;
        }
        if(this.state.subtitle === ''){
            alert('Insert subtitle');
            error = true;
        }
            
        if(!error){
            const movie = {
                imageUrl: this.state.imageUrl,
                title: this.state.title,
                subtitle: this.state.subtitle,
                description: this.state.description
            }
            movie.year = 2019;
            movie.rating = 0.0;
            MovieService.addMovie(movie);
        }
    }

    handleImageChange(event){
        this.setState({imageUrl: event.target.value});
    }

    handleTitleChange(event){
        this.setState({title: event.target.value});
    }
    
    handleDescriptionChange(event){
        this.setState({description: event.target.value});
    }
    handleSubtitleChange(event){
        this.setState({subtitle: event.target.value});
    }




    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Image:
                    <input type="text" value={this.state.image} onChange = { this.handleImageChange } />
                </label>
                <br/>
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange = { this.handleTitleChange } />
                </label>
                <br/>
                <label>
                    Subtitle:
                    <input type="text" value={this.state.subtitle} onChange = { this.handleSubtitleChange } />
                </label>
                <br/>
                <label>
                    Description:
                    <input type="text-area" value={this.state.description} onChange = { this.handleDescriptionChange } />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
