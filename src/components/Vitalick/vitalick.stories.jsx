import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
// import { SearchItem, LinkContainer } from '../..';
import { Vitalick } from './vitalick';


storiesOf('commponents/Vitalick', module)
    .addDecorator(centered)
    .add('Vitalick', () => (
        <div style={ { top: '50%', position: 'relative' } }>
            <Vitalick />
        </div>
    ));
