import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;

  input {
    width: 100%;
    padding: 20px;
    height: ${(props) => props.theme.sizes.medium};
    color: ${(props) => props.theme.colors.bg_light};
    background-color: ${(props) => props.theme.colors.bg_dark_light};
    border-radius: 10px;
    transition: all .2s ease;

    &::placeholder {
      color: ${(props) => props.theme.colors.bg_grey};
      font-weight: bold;
    }

    &:focus {
      height: 3rem;
      border: 0px none;
      outline: 0 none;
      box-shadow: 0 0 0 0;
    }
  }
`;
