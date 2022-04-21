import React, {useContext} from 'react';
import { MoreInfoCard } from '../MoreInfoCard';

import {Container} from './style';

export const MoreInfo = () => {
    return (
        <Container>
            <MoreInfoCard title='aaaaaa' info='5km/h'/>
            <MoreInfoCard title='aaaaaa' info='5km/h'/>
            <MoreInfoCard title='aaaaaa' info='5km/h'/>
            <MoreInfoCard title='aaaaaa' info='5km/h'/>
            <MoreInfoCard title='aaaaaa' info='5km/h'/>
            <MoreInfoCard title='aaaaaa' info='5km/h'/>
        </Container>
    )
};
