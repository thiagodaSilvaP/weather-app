import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 10px;
`