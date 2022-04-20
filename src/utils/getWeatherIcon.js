import ClearSky from '../assets/sun/26.png'
import FewClouds from '../assets/sun/27.png';
import ScatteredClounds from '../assets/cloud/35.png';
import BrokenClounds from '../assets/cloud/33.png';
import ShowerRain from '../assets/cloud/7.png';
import Rain from '../assets/sun/8.png';
import Thunderstorm from '../assets/cloud/12.png';
import Snow from '../assets/cloud/23.png';
import Mist from '../assets/sun/4.png';
import ClearSkyMoon from '../assets/moon/10.png';
import FewCloudsMoon from '../assets/moon/15.png';
import RainMoon from '../assets/moon/1.png';

export const getWeatherIcon = (icon) => {
    switch (icon) {
        case '01d':
            return ClearSky
        case '02d':
            return FewClouds
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
        case '01n':
            return ClearSkyMoon
        case '02n':
            return FewCloudsMoon
        case '03n':
            return ScatteredClounds
        case '04n':
            return BrokenClounds
        case '09n':
            return ShowerRain
        case '10':
            return RainMoon
        case '11n':
            return Thunderstorm
        case '13n':
            return Snow
        case '50n':
            return Mist
        default:
            return ScatteredClounds
    }
}