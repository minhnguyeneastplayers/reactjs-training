export const createWeatherCondition = (data) => ({
  id: data.id,
  main: data.main,
  description: data.description,
  icon: data.icon,
});

export const createRainData = (data) => ({
  oneHour: data['1h'] || 0,
});

export const createCurrentWeather = (data) => ({
  dt: data.dt,
  sunrise: data.sunrise,
  sunset: data.sunset,
  temp: data.temp,
  feels_like: data.feels_like,
  pressure: data.pressure,
  humidity: data.humidity,
  dew_point: data.dew_point,
  uvi: data.uvi,
  clouds: data.clouds,
  visibility: data.visibility,
  wind_speed: data.wind_speed,
  wind_deg: data.wind_deg,
  wind_gust: data.wind_gust,
  weather: data.weather.map(w => createWeatherCondition(w)),
  pop: data.pop,
  rain: data.rain ? createRainData(data.rain) : null,
});

export const createMinutelyPrecipitation = (data) => ({
  dt: data.dt,
  precipitation: data.precipitation,
});

export const createHourlyWeather = (data) => ({
  dt: data.dt,
  temp: data.temp,
  feels_like: data.feels_like,
  pressure: data.pressure,
  humidity: data.humidity,
  dew_point: data.dew_point,
  uvi: data.uvi,
  clouds: data.clouds,
  visibility: data.visibility,
  wind_speed: data.wind_speed,
  wind_deg: data.wind_deg,
  wind_gust: data.wind_gust,
  weather: data.weather.map(w => createWeatherCondition(w)),
  pop: data.pop,
  rain: data.rain ? createRainData(data.rain) : null,
});

export const createTemperatureRange = (data) => ({
  day: data.day,
  min: data.min,
  max: data.max,
  night: data.night,
  eve: data.eve,
  morn: data.morn,
});

export const createFeelsLikeTemp = (data) => ({
  day: data.day,
  night: data.night,
  eve: data.eve,
  morn: data.morn,
});

export const createDailyWeather = (data) => ({
  dt: data.dt,
  sunrise: data.sunrise,
  sunset: data.sunset,
  moonrise: data.moonrise,
  moonset: data.moonset,
  moon_phase: data.moon_phase,
  summary: data.summary,
  temp: createTemperatureRange(data.temp),
  feels_like: createFeelsLikeTemp(data.feels_like),
  pressure: data.pressure,
  humidity: data.humidity,
  dew_point: data.dew_point,
  wind_speed: data.wind_speed,
  wind_deg: data.wind_deg,
  wind_gust: data.wind_gust,
  weather: data.weather.map(w => createWeatherCondition(w)),
  clouds: data.clouds,
  pop: data.pop,
  rain: data.rain,
  uvi: data.uvi,
});

export const createWeatherResponse = (data) => {
  const weatherResponse = {
    lat: data.lat,
    lon: data.lon,
    timezone: data.timezone,
    timezone_offset: data.timezone_offset,
    current: createCurrentWeather(data.current),
    minutely: data.minutely.map(m => createMinutelyPrecipitation(m)),
    hourly: data.hourly.map(h => createHourlyWeather(h)),
    daily: data.daily.map(d => createDailyWeather(d)),
  };

  weatherResponse.getCurrentTemperature = () => weatherResponse.current.temp;
  weatherResponse.getCurrentWeatherDescription = () => weatherResponse.current.weather[0]?.description || '';
  weatherResponse.getCurrentWeatherIcon = () => weatherResponse.current.weather[0]?.icon || '';
  weatherResponse.getCurrentHumidity = () => weatherResponse.current.humidity;
  weatherResponse.getCurrentWindSpeed = () => weatherResponse.current.wind_speed;
  weatherResponse.getNextHourlyForecasts = (count = 24) => weatherResponse.hourly.slice(0, count);
  weatherResponse.getDailyForecasts = (count = 7) => weatherResponse.daily.slice(0, count);
  weatherResponse.getMinutelyPrecipitation = () => weatherResponse.minutely;

  return weatherResponse;
}; 