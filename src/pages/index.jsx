import React, {useEffect} from 'react';

import {Search} from '../components/Search';
import {CurrentWeather} from '../components/CurrentWeather';
import {NextWeather} from '../components/NextWeather';

import { Container, Center } from "./style";
import { Theme } from "../styles/Theme";

import {currentWeather} from '../services/weather';
import axios from 'axios';


function App() {
  return (
    <Theme>
      <Container>
        <Center>
          <Search/>
          <CurrentWeather/>
          <NextWeather/>
        </Center>
      </Container>
    </Theme>
  );
}

export default App;
