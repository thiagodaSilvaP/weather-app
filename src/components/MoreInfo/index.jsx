import React, { useContext } from "react";
import { MoreInfoCard } from "../MoreInfoCard";

import { WeatherContext } from "../../contexts/weatherContext";

import { Container } from "./style";

export const MoreInfo = () => {
  const { currentWeatherData } = useContext(WeatherContext);
  return (
    <Container>
        <MoreInfoCard
          title="Feels Like"
          data={currentWeatherData?.main?.feels_like}
          info='C'
        />
      <MoreInfoCard
        title="Max. / Min."
        data={{
          temp_max: currentWeatherData?.main?.temp_max,
          temp_min: currentWeatherData?.main?.temp_min,
        }}
      />
      <MoreInfoCard
        title="Wind"
        data={currentWeatherData?.wind?.speed}
        info='km/h'
      />
      <MoreInfoCard
        title="Humidity"
        data={currentWeatherData?.main?.humidity}
        info='%'
      />
      <MoreInfoCard
        title="Pressure"
        data={currentWeatherData?.main?.pressure}
        info='mb'
      />
    </Container>
  );
};
