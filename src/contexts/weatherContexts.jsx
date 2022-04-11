import React, { createContext, useState } from "react";
import { currentWeather } from "../services/weather";

export const CurrentWeatherContext = createContext();

export const NextWeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setcurrentWeather] = useState({});
  const [nextWeather, setNextWeather] = useState({ test: "nothing" });

  return (
    <CurrentWeatherContext.Provider
      value={{ currentWeather, setcurrentWeather }}
    >
      <NextWeatherContext.Provider value={nextWeather}>
        {children}
      </NextWeatherContext.Provider>
    </CurrentWeatherContext.Provider>
  );
};
