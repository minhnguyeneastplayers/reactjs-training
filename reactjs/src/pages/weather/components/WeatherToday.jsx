import React, { useRef, useEffect } from "react";
import styles from "./WeatherToday.module.css";

const todayList = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, "0") + ":00";
  return {
    temp: Math.round(20 + 10 * Math.sin((i / 24) * Math.PI * 2)) + "ºC",
    icon: i % 3 === 0 ? "☁️" : i % 3 === 1 ? "⛅" : "🌤️",
    time: hour,
  };
});

const getTodayString = () => {
  const now = new Date();
  return now.toLocaleString("en-US", { month: "short", day: "numeric" });
};

const WeatherToday = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const listRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (itemRefs.current[currentHour]) {
      itemRefs.current[currentHour].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentHour]);

  return (
    <div className={styles.weatherToday}>
      <div className={styles.weatherTodayHeader}>
        <span>Today</span>
        <span>{getTodayString()}</span>
      </div>
      <ul className={styles.weatherTodayList} ref={listRef}>
        {todayList.map((item, idx) => (
          <li
            key={idx}
            className={idx === currentHour ? styles.active : undefined}
            ref={(el) => (itemRefs.current[idx] = el)}
          >
            <div>{item.temp}</div>
            <div className={styles.icon}>{item.icon}</div>
            <div>{item.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherToday;
