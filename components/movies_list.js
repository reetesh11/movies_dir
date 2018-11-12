import React, { Component } from 'react';
import '../App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';


export default class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "IMDB ID", field: "imdbID"},
                {headerName: "Title", field: "Title"},
                {headerName: "Year", field: "Year"},
                {headerName: "Type", field: "Type"},
            ],
        }
    }

    selectMovie(movie) {
        console.log('slected movie' + movie);
        fetch('http://www.omdbapi.com/?apikey=2a203912&i={movie.imdbID}')
        .then(
            (results) => this.setState({ selectedMovie: results })
        );
    }


    render() {
        return (
            <AgGridReact
                onCellClicked={this.selectMovie}
                enableSorting={true}
                enableFilter={true}
                pagination={true}
                columnDefs={this.state.columnDefs}
                rowData={this.props.movies}
                >
             </AgGridReact>
        );
    }
}
