import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    FooterButton, TotalCost, Badge, Title,
} from '../..';

storiesOf('commponents/chain', module)
    .add('FooterButton', () => <FooterButton>jdnffd</FooterButton>)

    .add('TotalCost', () => <TotalCost value={ 4 } />)

    .add('Badge', () => (
        <span>
            <span>My registries</span>
            <Badge>1</Badge>
        </span>
    ))

    .add('Title', () => (
        <div>
            <span>wqerew</span>
            <Title>dsfsd</Title>
            <span>wqerew</span>
        </div>
    ));
