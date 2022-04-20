import {useState, useEffect, useContext} from 'react';

import {CityContext} from '../../contexts/cityContext';
import {getWeatherIcon} from '../../utils/getWeatherIcon';
import {currentWeather} from '../../services/weather';
import {timeDataCities} from '../../services/timeCities';

import {Container, WeatherTitle, Temperature} from './style';

export const CurrentWeather = () => {
    const [currentWeatherData, setcurrentWeatherData] = useState({});
    const [currentTimeCityData, setCurrentTimeCityData] = useState('');
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
            const time = await timeDataCities.get(`&location=${currentCity}`)
            const weatherIcon = getWeatherIcon(data.weather[0].icon)

            setcurrentWeatherData(data)
            setCurrentTimeCityData(time.data)
            setWeatherIconData(weatherIcon)
        }
        fetch()
    }, [currentCity]);

    console.log(currentWeatherData)
    console.log('aaaaaaaaaaaaaaaaa', currentTimeCityData);

    return (
        <Container>
            <h3>{currentWeatherData?.name}, {currentWeatherData?.sys?.country}, <br/>{currentTimeCityData.date_time_txt}</h3>
            <img src={weatherIconData} alt="" className='current-weather-image'/>
            <Temperature>{Math.ceil(currentWeatherData?.main?.temp)}ºC</Temperature>
            <WeatherTitle>{}</WeatherTitle>
        </Container>
    )
};
