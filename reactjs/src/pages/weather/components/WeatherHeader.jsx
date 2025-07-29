import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WeatherHeader.module.css";
import icMap from "../../../assets/ic_map.png";
import icNotification from "../../../assets/ic_notification.png";
import icArrowDown from "../../../assets/ic_arrow_down.png";

const WeatherHeader = () => {
  const navigate = useNavigate();
  
  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={styles.weatherHeader}>
      <div className = "flex items-center gap-2">
        <img className = "w-6 h-6" src={icMap} /> 
        Fortaleza
        <img className = "w-6 h-6" src={icArrowDown} />
      </div>
      <img 
        className = "w-6 h-6 cursor-pointer" 
        src={icNotification} 
        onClick={handleBack}
      />
    </div>
  );
};

export default WeatherHeader; 