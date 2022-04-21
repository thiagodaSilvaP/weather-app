import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg_dark_light};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  .current-weather-image {
    width: 50px;
  }
`;

export const MoreInfoCardTitle = styled.h3`
  margin-top: 1.5rem;
  font-weight: lighter;
  font-size: smaller;
`

export const MoreInfoCardInfo = styled.h1`
  font-size: medium;
`
