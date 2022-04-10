import {Search} from '../components/Search';
import {CurrentWeather} from '../components/CurrentWeather';

import { Container, Center } from "./style";
import { Theme } from "../styles/Theme";


function App() {
  return (
    <Theme>
      <Container>
        <Center>
          <Search/>
          <CurrentWeather/>
        </Center>
      </Container>
    </Theme>
  );
}

export default App;
