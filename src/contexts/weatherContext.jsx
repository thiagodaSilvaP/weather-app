import React, {useState, createContext} from 'react';

export const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [currentWeatherData, setCurrentWeatherData] = useState({});

    return (
        <WeatherContext.Provider value={{currentWeatherData, setCurrentWeatherData}}>
            {children}
        </WeatherContext.Provider>
    )
}
