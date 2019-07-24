import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Pane } from 'evergreen-ui';
import { Pill } from './Pill';

storiesOf('Elements|Badge & Pill', module)
    .addDecorator(centered)

    .add('Pill', () => (
        <Pane>
            <Pill margin={8}>1</Pill>
            <Pill margin={8} color="red">20</Pill>
            <Pill margin={8} color="red" isSolid>3</Pill>
            <Pill margin={8} color='blue'>7</Pill>
            <Pill margin={8} color='blue' isSolid>7</Pill>
        </Pane>
    ));
