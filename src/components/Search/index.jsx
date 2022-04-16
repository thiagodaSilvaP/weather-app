import React, {useState, useContext} from 'react';

import {CityContext} from '../../contexts/cityContext';

import { Container, InputContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  const [cityInputValue, setCityInputValue] = useState('');
  const {setCurrentCity} = useContext(CityContext)

  const onSubmit = (event) => {
    event.preventDefault()
    if (cityInputValue === '') {
      return console.error('Digite uma cidade!')
    }
    setCurrentCity(cityInputValue)
  }
  return (
    <Container>
      <InputContainer onSubmit={onSubmit}>
        <AiOutlineSearch className="icon-search"/>
        <input type="text" placeholder="Search for city..." onChange={(event) => setCityInputValue(event.target.value)} />
      </InputContainer>
    </Container>
  );
};
