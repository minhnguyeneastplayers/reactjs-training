import axios from "axios";

const APP_ID = "36918db0649c77a40c21effa3821b49a";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (!config.params) config.params = {};
  config.params.appid = APP_ID;
  return config;
});

export const getWeatherOneCall = async ({ lat, lon }) => {
  const res = await api.get("/onecall", {
    params: { lat, lon },
  });
  return res.data;
};

export default api; 