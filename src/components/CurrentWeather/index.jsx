import {useState, useEffect} from 'react';
import axios from 'axios';

import {Container, WeatherTitle, Temperature} from './style';

import {currentWeather} from '../../services/weather';

import cloud from '../../assets/cloud/5.png';

export const CurrentWeather = () => {
    const [currentWeatherData, setcurrentWeatherData] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const {data} = await currentWeather.get('weather?lat=42.9834&lon=-81.233&appid=0913c01f689e2d2731583b5982255c69')

            setcurrentWeatherData(data)
        }
        fetch()
    }, []);

    console.log(currentWeatherData)
    return (
        <Container>
            <img src={cloud} alt="" className='current-weather-image'/>
            <Temperature>{currentWeatherData.main.temp}ºF</Temperature>
            <WeatherTitle>Thunder</WeatherTitle>
        </Container>
    )
};
