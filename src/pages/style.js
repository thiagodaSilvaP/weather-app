import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.bg_default};
    color: ${props => props.theme.colors.bg_light};
`

export const Center = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`