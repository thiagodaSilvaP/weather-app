import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.bg_light};
  background-color: ${(props) => props.theme.colors.bg_dark_light};
  border-radius: 10px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  .icon-search {
    font-size: ${props => props.theme.sizes.small};
    margin-right: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px;

  input {
    flex: 1;
    height: ${(props) => props.theme.sizes.medium};
    color: ${(props) => props.theme.colors.bg_light};
    background-color: ${(props) => props.theme.colors.bg_dark_light};
    border-radius: 10px;
    transition: all 0.2s ease;

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
