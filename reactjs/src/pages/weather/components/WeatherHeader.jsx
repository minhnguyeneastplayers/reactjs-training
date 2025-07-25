import React from "react";
import styles from "../Weather.module.css";
import icMap from "../../../assets/ic_map.png";
import icNotification from "../../../assets/ic_notification.png";
import icArrowDown from "../../../assets/ic_arrow_down.png";

const WeatherHeader = () => (
  <div className={styles.weatherHeader}>
    <div className = "flex items-center gap-2">
      <img className = "w-6 h-6" src={icMap} /> 
      Fortaleza
      <img className = "w-6 h-6" src={icArrowDown} />
    </div>
    <img className = "w-6 h-6" src={icNotification} />
  </div>
);

export default WeatherHeader; 