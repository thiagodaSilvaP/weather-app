import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    margin: 0px 10px;
    flex: 1;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.bg_dark_light};
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    .current-weather-image {
        width: 50px;
    }
`

export const WeatherTitle = styled.h3`
  margin-top: 1.5rem;
  font-weight: lighter;
  font-size: smaller;
`;

export const Temperature = styled.h1`
  font-size: medium;
`;