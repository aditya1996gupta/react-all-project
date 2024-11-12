// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, selectMovie }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} selectMovie={selectMovie} />
            ))}
        </div>
    );
};

export default MovieList;
