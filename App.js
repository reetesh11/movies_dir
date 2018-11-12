import React, { Component } from 'react';
import MovieList from './components/movies_list';
import SearchBar from './components/search_bar.js';
import MovieDetail from './components/movie_detail.js';

import 'ag-grid-community/dist/styles/ag-theme-blue.css';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
            selected_movie: ''
        };

        this.searchMovies('Batman');
    }

    searchMovies(term) {
        fetch('http://www.omdbapi.com/?apikey=2a203912&s=' + term)
        .then(res => res.json())
        .then(
            (results) => this.setState({ movies: results.Search })
        );
    }

    selectMovie(imdbid) {
        console.log('slected movie' + imdbid);
        fetch('http://www.omdbapi.com/?apikey=2a203912&i={imdbid}')
        .then(
            (results) => this.setState({ selectedMovie: results })
        );
    }


    render() {

        return (
            <div>
                <div>
                    <SearchBar 
                        onSearchMovies={(term) => this.searchMovies(term)}
                    />
                </div>
                <div>
                    <MovieList />
                </div>
            </div>
        );
    }
}


export default App;
