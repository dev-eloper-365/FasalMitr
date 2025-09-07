import React, { useState } from "react";
import axios from "axios";
import "../styles/PestAttackPrediction.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function PestPrediction() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [predictions, setPredictions] = useState(null);

  const API_KEY = "1508d77a6f4c35ec4a33fbf53bd59e96"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY || API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      predictPests(response.data);
    } catch (error) {
      alert("Failed to fetch weather data. Please check the city name.");
    }
  };

  const predictPests = (data) => {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherCondition = data.weather[0].main;

    let predictions = {
      Aphids: 0,
      Whiteflies: 0,
      SpiderMites: 0,
      FungalDiseases: 0,
      RootKnotNematodes: 0,
      LeafMiners: 0,
      Cutworms: 0,
      Thrips: 0,
      StemBorers: 0,
      Armyworms: 0,
      FruitFlies: 0,
      Grasshoppers: 0,
      Bollworms: 0,
      BrownPlanthopper: 0,
      RiceBlast: 0,
    };

    // Enhanced prediction logic for real-life scenarios
    if (temp > 20 && temp < 30 && humidity > 65) {
      predictions.Aphids = 0.85;
      predictions.FungalDiseases = 0.75;
    }
    if (temp > 30 && humidity < 50 && windSpeed > 5) {
      predictions.SpiderMites = 0.95;
    }
    if (humidity > 80 && temp < 25) {
      predictions.RootKnotNematodes = 0.65;
    }
    if (temp > 25 && windSpeed > 10) {
      predictions.LeafMiners = 0.8;
    }
    if (humidity > 85 && temp < 20 && weatherCondition === "Rain") {
      predictions.Cutworms = 0.7;
      predictions.Thrips = 0.6;
    }
    if (temp > 25 && temp < 35 && humidity > 70) {
      predictions.StemBorers = 0.8;
    }
    if (temp > 20 && temp < 30 && humidity > 60) {
      predictions.Armyworms = 0.75;
    }
    if (temp > 25 && humidity > 65) {
      predictions.FruitFlies = 0.7;
    }
    if (temp > 30 && humidity < 40) {
      predictions.Grasshoppers = 0.85;
    }
    if (temp > 25 && humidity > 60) {
      predictions.Bollworms = 0.9;
    }
    if (temp > 28 && humidity > 70) {
      predictions.BrownPlanthopper = 0.85;
    }
    if (temp > 20 && humidity > 80 && weatherCondition === "Rain") {
      predictions.RiceBlast = 0.9;
    }

    setPredictions(predictions);
  };

  const getSolutions = (pest) => {
    const solutions = {
      Aphids: "Use neem oil or insecticidal soap. Introduce natural predators like ladybugs.",
      Whiteflies: "Spray with insecticidal soap. Use yellow sticky traps.",
      SpiderMites: "Increase humidity around plants and spray with horticultural oil.",
      FungalDiseases: "Ensure proper drainage. Apply fungicides if necessary.",
      RootKnotNematodes: "Use soil amendments like neem cake. Practice crop rotation.",
      LeafMiners: "Remove affected leaves. Use sticky traps to monitor adult flies.",
      Cutworms: "Use physical barriers around plants. Hand-pick larvae during the evening.",
      Thrips: "Introduce beneficial insects like lacewings. Apply blue sticky traps.",
      StemBorers: "Use pheromone traps to monitor. Apply appropriate insecticides if necessary.",
      Armyworms: "Regularly inspect crops. Use biological control agents like Bacillus thuringiensis.",
      FruitFlies: "Use bait traps. Destroy infested fruits to prevent larvae from maturing.",
      Grasshoppers: "Implement biological control using natural predators. Apply insecticidal sprays if infestation is severe.",
      Bollworms: "Plant resistant crop varieties. Use pheromone traps and apply insecticides as needed.",
      BrownPlanthopper: "Maintain proper water management. Use resistant rice varieties and apply insecticides judiciously.",
      RiceBlast: "Use certified disease-free seeds. Apply appropriate fungicides and maintain field sanitation.",
    };
    return solutions[pest] || "No solution available.";
  };

  return (
    <div className="pest-prediction-container">
      <h1 className="title">Advanced Pest Attack Prediction</h1>

      <div className="input-section">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input-field"
        />
        <button onClick={fetchWeather} className="btn-fetch">
          Get Prediction
        </button>
      </div>

      {weatherData && (
        <div className="weather-card">
          <h2>Weather Data for {city}</h2>
          <p>🌡️ Temperature: {weatherData.main.temp}°C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>🌬️ Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}

      {predictions && (
        <div className="results-card">
          <h2>Prediction Results</h2>
          <div className="chart-container" style={{ overflowX: "auto" }}>
            <ResponsiveContainer width={1500} height={300}>
              <BarChart
                data={Object.entries(predictions).map(([pest, probability]) => ({
                  pest,
                  probability,
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="pest"
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="probability" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="solutions-section">
            <h3>Solutions for Predicted Pests</h3>
            <ul>
              {Object.entries(predictions).map(
                ([pest, probability]) =>
                  probability > 0.5 && (
                    <li key={pest}>
                      <strong>{pest}:</strong> {getSolutions(pest)}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PestPrediction;
