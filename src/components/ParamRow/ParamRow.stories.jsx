import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { ParamRow, WideInput } from '../..';

storiesOf('commponents/ParamRow', module).add('ParamRow', () => (
    <div style={ { top: '30%', position: 'relative', width: '100%' } }>
        <ParamRow>
            <WideInput placeholder='Name' defaultValue='' />
        </ParamRow>
        <ParamRow>
            <WideInput placeholder='Name' defaultValue='' />
        </ParamRow>
        <ParamRow>
            <WideInput placeholder='Name' defaultValue='' />
        </ParamRow>
    </div>
));
