import React from 'react';
import {Container, MoreInfoCardTitle, MoreInfoCardInfo} from './style';

export const MoreInfoCard = ({title, info}) => {
    return (
        <Container>
            <MoreInfoCardTitle>{title}</MoreInfoCardTitle>
            <MoreInfoCardInfo>{info}</MoreInfoCardInfo>
        </Container>
    )
};
