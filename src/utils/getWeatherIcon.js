import ClearSky from '../assets/sun/26.png'
import FewClounds from '../assets/sun/27.png';
import ScatteredClounds from '../assets/cloud/35.png';
import BrokenClounds from '../assets/cloud/33.png';
import ShowerRain from '../assets/cloud/7.png';
import Rain from '../assets/sun/8.png';
import Thunderstorm from '../assets/cloud/12.png';
import Snow from '../assets/cloud/23.png';
import Mist from '../assets/sun/4.png';

export const getWeatherIcon = (icon) => {
    switch (icon) {
        case '01d':
            return ClearSky
        case '02d':
            return FewClounds
        case '03d':
            return ScatteredClounds
        case '04d':
            return BrokenClounds
        case '09d':
            return ShowerRain
        case '10d':
            return Rain
        case '11d':
            return Thunderstorm
        case '13d':
            return Snow
        case '50d':
            return Mist
        default:
            return ScatteredClounds
    }
}