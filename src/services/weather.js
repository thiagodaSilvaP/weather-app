import axios from 'axios';

export const currentWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const dailyWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})