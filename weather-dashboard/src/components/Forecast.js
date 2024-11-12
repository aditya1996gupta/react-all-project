import React from 'react';

const Forecast = ({ data }) => {
    return (
        <div className="forecast">
            <h2>5-Day Forecast</h2>
            <div className="forecast-container">
                {data.map((day, index) => (
                    <div key={index} className="forecast-day">
                        <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                        <p>Temp: {day.main.temp}°C</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                        />
                        <p>{day.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
