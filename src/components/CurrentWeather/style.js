import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: inherit;

  .current-weather-image {
    width: 200px;
  }
`;

export const WeatherTitle = styled.h3`
  margin-top: 3rem;
  font-weight: lighter;
  font-size: ${(props) => props.theme.sizes.small};
`;

export const Temperature = styled.h1`
  font-size: ${(props) => props.theme.sizes.large};
`;
