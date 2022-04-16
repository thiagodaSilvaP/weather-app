import {useState, useEffect, useContext} from 'react';

import {CityContext} from '../../contexts/cityContext';

import {currentWeather} from '../../services/weather';

import {Container, WeatherTitle, Temperature} from './style';
import cloud from '../../assets/cloud/5.png';

export const CurrentWeather = () => {
    const [currentWeatherData, setcurrentWeatherData] = useState({});
    const {currentCity} = useContext(CityContext)

    useEffect(() => {
        const fetch = async () => {
            const {data} = await currentWeather.get(`weather?q=${currentCity}&appid=0913c01f689e2d2731583b5982255c69&units=metric`)

            setcurrentWeatherData(data)
        }
        fetch()
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const {data} = await currentWeather.get(`weather?q=${currentCity}&appid=0913c01f689e2d2731583b5982255c69&units=metric`)

            setcurrentWeatherData(data)
        }
        fetch()
    }, [currentCity]);

    console.log(currentWeatherData?.weather[0].main)
    return (
        <Container>
            <img src={cloud} alt="" className='current-weather-image'/>
            <Temperature>{currentWeatherData?.main?.temp}ºC</Temperature>
            <WeatherTitle>{currentWeatherData?.weather[0].main}</WeatherTitle>
        </Container>
    )
};
