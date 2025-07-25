import React from "react";
import styles from "../Weather.module.css";
import icHumidity from "../../../assets/ic_humidity.png";
import icWind from "../../../assets/ic_wind.png";
import icRain from "../../../assets/ic_rain.png";

const WeatherStats = () => (
  <div className={styles.weatherStats}>
    <div className="flex flex-row gap-2">
      <img className = "w-7 h-7 " src={icRain} /> 6%
    </div>
    <div className="flex flex-row gap-2">
      <img className = "w-7 h-7" src={icHumidity} /> 90%
    </div>
    <div className="flex flex-row gap-2">
      <img className = "w-7 h-7" src={icWind} /> 19 km/h
    </div>
  </div>
);

export default WeatherStats;
