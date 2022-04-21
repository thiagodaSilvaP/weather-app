import React from "react";

import { Search } from "../components/Search";
import { CurrentWeather } from "../components/CurrentWeather";
import { NextWeather } from "../components/NextWeather";
import { MoreInfo } from "../components/MoreInfo";

import { CityProvider } from "../contexts/cityContext";
import { WeatherProvider } from "../contexts/weatherContext";

import { Container, Center } from "./style";
import { Theme } from "../styles/Theme";

function App() {
  return (
    <WeatherProvider>
      <CityProvider>
        <Theme>
          <Container>
            <Center>
              <Search />
              <CurrentWeather />
              <NextWeather />
              <MoreInfo />
            </Center>
          </Container>
        </Theme>
      </CityProvider>
    </WeatherProvider>
  );
}

export default App;
