import {Container} from './style';
import {AiOutlineSearch} from 'react-icons/ai';

export const Search = () => {
    return (
        <Container>
            <AiOutlineSearch/>
            <input type="text" placeholder='Search for city'/>
        </Container>
    )
};
