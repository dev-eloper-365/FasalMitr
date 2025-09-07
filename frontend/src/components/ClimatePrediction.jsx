import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ClimatePrediction.css';
import clearImage from '../assets/clear.jpg';
import rainImage from '../assets/rain.jpg';
import cloudsImage from '../assets/clouds.jpg';
import snowImage from '../assets/snow.jpg';
import thunderstormImage from '../assets/thunderstorm.jpg';
import smokeImage from '../assets/smoke.jpg';
import mistImage from '../assets/mist.jpg';
import hazeImage from '../assets/haze.jpg';

const ClimatePrediction = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const API_KEY = '1508d77a6f4c35ec4a33fbf53bd59e96';

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          setError('Unable to retrieve your location.');
          console.error(error);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setCurrentWeather(currentResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const dailyData = forecastResponse.data.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
      );
      setForecastData(dailyData.slice(1, 7));
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setCurrentWeather(currentResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const dailyData = forecastResponse.data.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
      );
      setForecastData(dailyData.slice(1, 7));
    } catch (err) {
      setError('City not found. Please enter a valid city name.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      fetchWeatherByCity(searchQuery);
      setSearchQuery('');
    }
  };

  const getWeatherImage = (weather) => {
    switch (weather) {
      case 'Clear':
        return clearImage;
      case 'Rain':
        return rainImage;
      case 'Clouds':
        return cloudsImage;
      case 'Snow':
        return snowImage;
      case 'Thunderstorm':
        return thunderstormImage;
      case 'Smoke':
        return smokeImage;
      case 'Mist':
        return mistImage;
      case 'Haze':
        return hazeImage;
      default:
        return clearImage;
    }
  };

  const generatePrediction = (weather) => {
    if (!weather) return "Weather data not available.";
    const { main, description } = weather.weather[0];

    if (main === 'Rain') {
      return "It's likely to rain. Avoid irrigation and protect crops.";
    } else if (main === 'Clear') {
      return "Weather is clear. Ideal for outdoor farming activities.";
    } else if (main === 'Thunderstorm') {
      return "Severe thunderstorm expected. Take safety precautions.";
    } else if (main === 'Snow') {
      return "Snowfall predicted. Ensure crop protection.";
    } else if (main === 'Mist' || main === 'Haze') {
      return "Low visibility due to mist/haze. Monitor closely.";
    } else {
      return `Current weather is ${description}. Proceed with caution.`;
    }
  };

  const weatherImage = currentWeather ? getWeatherImage(currentWeather.weather[0].main) : null;

  return (
    <div
      className="climate-prediction-page"
      style={{
        background: weatherImage ? `url(${weatherImage}) no-repeat center center / cover` : '#f0f0f0',
      }}
    >
      <div className="weather-header">
        <h1>Climate Prediction Dashboard</h1>
        <p>Accurate and real-time weather updates for your location or any city</p>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter city name..."
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {loading && <p className="loading">Fetching weather data...</p>}
      {error && <p className="error">{error}</p>}

      <div className="weather-content">
        <div className="left-section">
          {currentWeather && (
            <div className="current-weather-section">
              <h2>Today, {currentWeather.name}, {currentWeather.sys.country}</h2>
              <div className="current-weather-info">
                <div>
                  <h1>{currentWeather.main.temp}°C</h1>
                  <p>{currentWeather.weather[0].description}</p>
                  <p>Humidity: {currentWeather.main.humidity}%</p>
                  <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
                  <p>Pressure: {currentWeather.main.pressure} hPa</p>
                </div>
              </div>
              <div className="prediction-section">
                <h2>Prediction & Recommendation</h2>
                <p>{generatePrediction(currentWeather)}</p>
              </div>
            </div>
          )}
        </div>

        <div className="right-section">
          {forecastData.length > 0 && (
            <div className="forecast-section">
              <h2>Next 4-Days Forecast</h2>
              <div className="forecast-grid">
                {forecastData.map((day, index) => (
                  <div key={index} className="forecast-card">
                    <p className="day">
                      {new Date(day.dt_txt).toLocaleDateString('en-US', {
                        weekday: 'long',
                      })}
                    </p>
                    <div className="weather-details">
                      <p>{day.main.temp}°C</p>
                      <p>{day.weather[0].description}</p>
                      <p>Humidity: {day.main.humidity}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClimatePrediction;
