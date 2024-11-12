// src/components/MovieDetail.js
import React from 'react';

const MovieDetail = ({ movie, setSelectedMovie }) => {
    return (
        <div className="movie-detail">
            <button onClick={() => setSelectedMovie(null)}>Back to Search</button>
            <h2>{movie.Title} ({movie.Year})</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        </div>
    );
};

export default MovieDetail;
