import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'term': ''
        };
    }

    onInputChange(term){
        this.setState({term: term});
        this.props.onSearchMovies(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.value}
                onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
