import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.bg_default};
`

export const Center = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`