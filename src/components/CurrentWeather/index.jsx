import {Container, WeatherTitle, Temperature} from './style';

import cloud from '../../assets/cloud/cloud.png';

export const CurrentWeather = () => {
    return (
        <Container>
            <img src={cloud} alt="" className='current-weather-image'/>
            <WeatherTitle>Thunder</WeatherTitle>
            <Temperature>13</Temperature>
        </Container>
    )
};
