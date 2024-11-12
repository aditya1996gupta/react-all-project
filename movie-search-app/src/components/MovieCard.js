// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie, selectMovie }) => {
    return (
        <div className="movie-card" onClick={() => selectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    );
};

export default MovieCard;
