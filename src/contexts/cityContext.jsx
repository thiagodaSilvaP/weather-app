import React, { createContext, useState } from "react";

export const CityContext = createContext()

export const CityProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState('London');

  return (
    <CityContext.Provider value={{currentCity, setCurrentCity}}>
      {children}
    </CityContext.Provider>
  );
};
