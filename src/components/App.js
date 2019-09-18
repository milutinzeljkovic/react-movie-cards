import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import AddMovieDialog from './AddMovieDialog';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards',
            showDialog: false
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    toggleDialog(){
        console.log('here');
        console.log(this.state);
        this.setState({
            showDialog: !this.state.showDialog
        });
        
    }

    render() {
        console.log("toggle: ",this.state.showDialog);
        
        return (
            <div>
                <Header title={this.state.title} handleOpenDialog={ () => this.toggleDialog } buttonName={this.state.showDialog ? 'Back to movies' : 'Add movie'}/>
                <div className="mt-5">
                    { this.state.showDialog ? <AddMovieDialog handleCloseDialog={ this.toggleDialog }/> : <Movies />}
                </div>
            </div>
        );
    }
}