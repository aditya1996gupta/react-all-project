import React from 'react';

const CurrentWeather = ({ data }) => {
    return (
        <div className="current-weather">
            <h2>Current Weather in {data.name}</h2>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed} m/s</p>
            <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
            />
            <p>{data.weather[0].description}</p>
        </div>
    );
};

export default CurrentWeather;
