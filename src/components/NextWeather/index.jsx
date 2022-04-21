import React, {useState, useEffect, useContext} from 'react';

import {WeatherCard} from '../NextWeatherCard';
import {CityContext} from '../../contexts/cityContext';
import {WeatherContext} from '../../contexts/weatherContext';
import {dailyWeather} from '../../services/weather';

import {Container} from './style';

export const NextWeather = ({daily}) => {
    return (
        <Container>
            {daily.map((day, index) => <WeatherCard key={index} day={day}/>)}
        </Container>
    )
};