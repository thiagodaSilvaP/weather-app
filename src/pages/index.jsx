import React, { useEffect } from "react";

import { Search } from "../components/Search";
import { CurrentWeather } from "../components/CurrentWeather";
import { NextWeather } from "../components/NextWeather";

import { WeatherProvider } from "../contexts/weatherContexts";

import { Container, Center } from "./style";
import { Theme } from "../styles/Theme";

function App() {
  return (
    <WeatherProvider>
      <Theme>
        <Container>
          <Center>
            <Search />
            <CurrentWeather />
            <NextWeather />
          </Center>
        </Container>
      </Theme>
    </WeatherProvider>
  );
}

export default App;
