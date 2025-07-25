import React from "react";
import styles from "../Weather.module.css";
import WeatherDetails from "./WeatherStats";

const WeatherMain = () => (
  <div className={styles.weatherMain}>
    <div className = "flex items-center gap-2">
      <div className="text-6xl">
        <span aria-label="weather">🌦️</span>
      </div>
      <div className = "text-5xl font-bold mr-2 ml-2">28º</div>
        <div className = "text-base text-white flex flex-col font-medium">
          <div>Precipitations</div>
          <div className = "flex flex-row gap-4"> 
            <div>Max.: 31º</div>
            <div>Min.: 25º</div>
          </div>
        </div>
    </div>
  </div>
);

export default WeatherMain; 