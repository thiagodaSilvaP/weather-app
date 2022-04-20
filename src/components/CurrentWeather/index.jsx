import {useState, useEffect, useContext} from 'react';

import {CityContext} from '../../contexts/cityContext';
import {currentWeather} from '../../services/weather';
import {getWeatherIcon} from '../../utils/getWeatherIcon';

import {Container, WeatherTitle, Temperature} from './style';
import cloud from '../../assets/cloud/5.png';


import ClearSky from '../../assets/sun/26.png'
import FewClounds from '../../assets/sun/27.png';
import ScatteredClounds from '../../assets/cloud/35.png';
import BrokenClounds from '../../assets/cloud/33.png';
import ShowerRain from '../../assets/cloud/7.png';
import Rain from '../../assets/sun/8.png';
import Thunderstorm from '../../assets/cloud/12.png';
import Snow from '../../assets/cloud/23.png';
import Mist from '../../assets/sun/4.png';


export const CurrentWeather = () => {
    const [currentWeatherData, setcurrentWeatherData] = useState({});
    const {currentCity} = useContext(CityContext)
    const [weatherIconData, setWeatherIconData] = useState('');

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
            const weatherIcon = getWeatherIcon(data.weather[0].icon)

            setcurrentWeatherData(data)
            setWeatherIconData(weatherIcon)
        }
        fetch()
    }, [currentCity]);

    const weatherIcon = (icon) => {
        getWeatherIcon(icon)
    }
    return (
        <Container>
            <h3>{currentWeatherData?.name}, {currentWeatherData?.sys?.country}</h3>
            <img src={weatherIconData} alt="" className='current-weather-image'/>
            <Temperature>{Math.ceil(currentWeatherData?.main?.temp)}ºC</Temperature>
            <WeatherTitle>{}</WeatherTitle>
        </Container>
    )
};
