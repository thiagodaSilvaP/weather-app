import {WeatherCard} from '../WeatherCard';

import {Container} from './style';

export const NextWeather = () => {
    const array = [3, 4, 4]
    return (
        <Container>
            {array.map((item, index) => <WeatherCard key={index}/>)}
        </Container>
    )
};