import {Container, WeatherTitle, Temperature} from './style';

import cloud from '../../assets/cloud/5.png';

export const WeatherCard = () => {
    return (
        <Container>
            <img src={cloud} alt="" className='current-weather-image'/>
            <WeatherTitle>Thunder</WeatherTitle>
            <Temperature>13</Temperature>
        </Container>
    )
};

