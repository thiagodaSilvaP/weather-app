import {useState, useEffect, useContext} from 'react';

import {CityContext} from '../../contexts/cityContext';
import {WeatherContext} from '../../contexts/weatherContext';

import {currentWeather} from '../../services/weather';
import {timeDataCities} from '../../services/timeCities';

import {getWeatherIcon} from '../../utils/getWeatherIcon';

import {Container, WeatherTitle, Temperature} from './style';

export const CurrentWeather = () => {
    const {currentCity} = useContext(CityContext)
    const {currentWeatherData, setCurrentWeatherData} = useContext(WeatherContext)
    const [currentTimeCityData, setCurrentTimeCityData] = useState('');
    const [weatherIconData, setWeatherIconData] = useState('');

    useEffect(() => {
        const fetch = async () => {
            const {data} = await currentWeather.get(`weather?q=${currentCity}&appid=0913c01f689e2d2731583b5982255c69&units=metric`)
            console.log('Data of first fetch', data);
            setCurrentWeatherData(data)
        }
        fetch()
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const {data} = await currentWeather.get(`weather?q=${currentCity}&appid=0913c01f689e2d2731583b5982255c69&units=metric`)
            const time = await timeDataCities.get(`&location=${currentCity}`)
            const weatherIcon = getWeatherIcon(data.weather[0].icon)

            setCurrentWeatherData(data)
            setCurrentTimeCityData(time.data)
            setWeatherIconData(weatherIcon)
        }
        fetch()
    }, [currentCity]);

    return (
        <Container>
            <h3>{currentWeatherData?.name}, {currentWeatherData?.sys?.country}, <br/>{currentTimeCityData.date_time_txt}</h3>
            <img src={weatherIconData} alt="" className='current-weather-image'/>
            <Temperature>{Math.ceil(currentWeatherData?.main?.temp)}ºC</Temperature> 
            <WeatherTitle>{currentWeatherData?.weather?.[0].main}</WeatherTitle>
        </Container>
    )
};
