import React, { Component } from 'react';

const MovieDetail = (props) => {
    if (!props.imdbid) {
        return (<div> Loading ... </div>);
    }

    return (
        <div className="movie-detail col-md-8">
            <div>movie.Title</div>
        </div>
    );
}

export default MovieDetail;
