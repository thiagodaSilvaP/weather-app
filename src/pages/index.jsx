import React from "react";

import { Search } from "../components/Search";
import { CurrentWeather } from "../components/CurrentWeather";
import { NextWeather } from "../components/NextWeather";
import { MoreInfo } from "../components/MoreInfo";

import {CityProvider} from '../contexts/cityContext';

import { Container, Center } from "./style";
import { Theme } from "../styles/Theme";

function App() {
  return (
    <CityProvider>
      <Theme>
        <Container>
          <Center>
            <Search />
            <CurrentWeather />
            <NextWeather />
            <MoreInfo/>
          </Center>
        </Container>
      </Theme>
    </CityProvider>
  );
}

export default App;
