import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { BlockRow, WideInput } from '../..';

storiesOf('commponents/BlockRow', module).add('BlockRow', () => (
    <div style={ { top: '30%', position: 'relative', width: '100%' } }>
        <BlockRow>
            <WideInput placeholder='Name' defaultValue='' />
        </BlockRow>
        <BlockRow>
            <WideInput placeholder='Name' defaultValue='' />
        </BlockRow>
        <BlockRow>
            <WideInput placeholder='Name' defaultValue='' />
        </BlockRow>
    </div>
));
