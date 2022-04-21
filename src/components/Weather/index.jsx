import {useState, useEffect, useContext} from 'react';

import { NextWeather } from "../NextWeather";
import { MoreInfo } from "../MoreInfo";

import {CityContext} from '../../contexts/cityContext';
import {WeatherContext} from '../../contexts/weatherContext';

import {currentWeather} from '../../services/weather';
import {timeDataCities} from '../../services/timeCities';
import {dailyWeather} from '../../services/weather';

import {getWeatherIcon} from '../../utils/getWeatherIcon';

import {Container, WeatherTitle, Temperature} from './style';

export const Weather = () => {
    const {currentCity} = useContext(CityContext)
    const {currentWeatherData, setCurrentWeatherData} = useContext(WeatherContext)
    const [currentTimeCityData, setCurrentTimeCityData] = useState('');
    const [weatherIconData, setWeatherIconData] = useState('');
    const [dailyWeatherData, setDailyWeatherData] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const weather = await currentWeather.get(`weather?q=${currentCity}&appid=0913c01f689e2d2731583b5982255c69&units=metric`)

            const lat = await weather?.data?.coord?.lat
            const lon = await weather?.data?.coord?.lon
            const daily = await dailyWeather.get(`onecall?exclude=minutely,hourly&units=metric&appid=a5e8f0ff6c4539df70bee958dc95fa10&lat=${lat}&lon=${lon}`)

            const time = await timeDataCities.get(`&location=${currentCity}`)
            setCurrentWeatherData(weather.data)
            setDailyWeatherData(daily.data.daily)
            setCurrentTimeCityData(time.data)
            console.log('Data of first fetch', weather.data);
        }
        fetch()
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const weather = await currentWeather.get(`weather?q=${currentCity}&appid=0913c01f689e2d2731583b5982255c69&units=metric`)

            const lat = await weather?.data?.coord?.lat
            const lon = await weather?.data?.coord?.lon
            const daily = await dailyWeather.get(`onecall?exclude=minutely,hourly&units=metric&appid=a5e8f0ff6c4539df70bee958dc95fa10&lat=${lat}&lon=${lon}`)



            const time = await timeDataCities.get(`&location=${currentCity}`)
            const weatherIcon = getWeatherIcon(weather.data.weather[0].icon)

            setCurrentWeatherData(weather.data)
            setDailyWeatherData(daily.data.daily)
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
            <NextWeather daily={Array.from(dailyWeatherData).splice(1, 7)}/>
            <MoreInfo/>
        </Container>
    )
};
