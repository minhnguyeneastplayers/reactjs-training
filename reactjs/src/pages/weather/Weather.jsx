import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import WeatherHeader from "./components/WeatherHeader";
import WeatherMain from "./components/WeatherMain";
import WeatherDetails from "./components/WeatherStats";
import WeatherToday from "./components/WeatherToday";
import WeatherNext from "./components/WeatherNext";
import { getWeatherOneCall } from "../../services/api";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = (lat, lon) => {
      getWeatherOneCall({ lat, lon })
        .then((data) => {
          setWeatherData(data);
          console.log("Weather OneCall:", data);
        })
        .catch((err) => {
          console.error("Error fetching weather:", err);
        });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          console.warn("Geolocation error, fallback to default", err);
          fetchWeather(10.802302, 106.651749);
        }
      );
    } else {
      fetchWeather(10.802302, 106.651749);
    }
  }, []);

  return (
    <div className={styles.weatherContainer}>
      <WeatherHeader weatherData={weatherData} />
      <WeatherMain weatherData={weatherData} />
      <WeatherDetails weatherData={weatherData} />
      <div className="flex">
        <WeatherToday weatherData={weatherData} />
        <WeatherNext weatherData={weatherData} />
      </div>
    </div>
  );
};

export default Weather;
