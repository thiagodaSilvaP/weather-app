import React, { useState } from "react";

import { Container, WeatherTitle, Temperature } from "./style";

import { convertUnixToDate } from "../../utils/convertUnixToDate";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

export const WeatherCard = ({ day }) => {
  const [weatherIcon, setWeatherIcon] = useState(
    getWeatherIcon(day?.weather?.[0].icon) 
  );
  return (
    <Container>
      <img src={weatherIcon} alt="" className="current-weather-image" />
      <WeatherTitle>{convertUnixToDate(day.dt)}</WeatherTitle>
      <Temperature>{Math.ceil(day?.temp?.max)} {Math.ceil(day?.temp?.min)}</Temperature>
    </Container>
  );
};
