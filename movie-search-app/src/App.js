// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const searchMovies = async (query) => {
        const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
            );
            setMovies(response.data.Search || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const selectMovie = async (id) => {
        const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
            );
            setSelectedMovie(response.data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    return (
        <div className="App">
            <h1>Movie Search App</h1>
            <SearchBar searchMovies={searchMovies} />
            {selectedMovie ? (
                <MovieDetail movie={selectedMovie} setSelectedMovie={setSelectedMovie} />
            ) : (
                <MovieList movies={movies} selectMovie={selectMovie} />
            )}
        </div>
    );
}

export default App;
