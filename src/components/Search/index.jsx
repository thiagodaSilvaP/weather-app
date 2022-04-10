import { Container, InputContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <Container>
      <InputContainer>
        <AiOutlineSearch className="icon-search"/>
        <input type="text" placeholder="Search for city..." />
      </InputContainer>
    </Container>
  );
};
