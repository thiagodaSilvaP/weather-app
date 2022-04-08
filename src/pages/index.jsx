import {Search} from '../components/Search';

import { Container, Center } from "./style";
import { Theme } from "../styles/Theme";


function App() {
  return (
    <Theme>
      <Container>
        <Center>
          <Search/>
        </Center>
      </Container>
    </Theme>
  );
}

export default App;
