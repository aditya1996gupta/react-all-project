// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrrentWeather';
import Forecast from './components/Forecast';
import './App.css'; 

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState([]);
    const [city, setCity] = useState('');

    const fetchWeather = async () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        try {
            // Fetch current weather data
            const currentResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(currentResponse.data);

            // Fetch 5-day forecast data
            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
            );
            setForecastData(forecastResponse.data.list.filter((_, index) => index % 8 === 0)); // Filter to get data for each day at the same time
        } catch (error) {
            console.error("Error fetching weather data", error);
        }
    };

    return (
        <div className="App">
            <h1>Weather Dashboard</h1>
            <SearchBar setCity={setCity} fetchWeather={fetchWeather} />
            {weatherData && <CurrentWeather data={weatherData} />}
            {forecastData.length > 0 && <Forecast data={forecastData} />}
        </div>
    );
}

export default App;
