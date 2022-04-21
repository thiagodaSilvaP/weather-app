import React from "react";

import { Search } from "../components/Search";
import {Weather} from '../components/Weather';
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
              <Weather/>
            </Center>
          </Container>
        </Theme>
      </CityProvider>
    </WeatherProvider>
  );
}

export default App;
