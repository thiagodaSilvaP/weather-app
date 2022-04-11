import {Search} from '../components/Search';
import {CurrentWeather} from '../components/CurrentWeather';
import {NextWeather} from '../components/NextWeather';

import { Container, Center } from "./style";
import { Theme } from "../styles/Theme";


function App() {
  return (
    <Theme>
      <Container>
        <Center>
          <Search/>
          <CurrentWeather/>
          <NextWeather/>
        </Center>
      </Container>
    </Theme>
  );
}

export default App;
