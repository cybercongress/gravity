import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { FormControl, WideInput } from '../..';

storiesOf('commponents/FormControl', module).add('FormControl', () => (
    <div style={ { top: '30%', position: 'relative', width: '100%' } }>
        <FormControl>
            <WideInput placeholder='Name' defaultValue='' />
        </FormControl>
        <FormControl>
            <WideInput placeholder='Name' defaultValue='' />
        </FormControl>
        <FormControl>
            <WideInput placeholder='Name' defaultValue='' />
        </FormControl>
    </div>
));
