import React from "react";
import styles from "./WeatherNext.module.css";
import icCalendar from "../../../assets/ic_calendar.png";

const nextList = [
  { day: "Monday", icon: "🌧️", temp: "13º 10º" },
  { day: "Tuesday", icon: "⛈️", temp: "17º 12º" },
  { day: "Tuesday", icon: "⛈️", temp: "17º 12º" },
  { day: "Tuesday", icon: "⛈️", temp: "17º 12º" },
  { day: "Tuesday", icon: "⛈️", temp: "17º 12º" },
];

const WeatherNext = () => (
  <div className={styles.weatherNext}>
    <div className={styles.weatherNextHeader}>
      <span>Next Forecast</span>
      <img className = "w-8 h-8" src={icCalendar} />
    </div>
    <ul className={styles.weatherNextList}>
      {nextList.map((item, idx) => (
        <li key={idx}>
          <div>{item.day}</div>
          <div className={styles.icon}>{item.icon}</div>
          <div>{item.temp}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default WeatherNext; 