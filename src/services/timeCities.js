import axios from 'axios';

export const timeDataCities = axios.create({
    baseURL: 'https://api.ipgeolocation.io/timezone?apiKey=aa2a6aab15aa4706bd74a4cb506c8476'
})
