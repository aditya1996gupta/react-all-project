// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ setCity, fetchWeather }) => {
    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                placeholder="Enter city name"
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
