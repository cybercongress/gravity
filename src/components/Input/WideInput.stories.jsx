import React from 'react';
import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';
import { WideInput } from './WideInput';

storiesOf('commponents/WideInput', module)
    .addDecorator(centered)
    .add('WideInput', () => <WideInput placeholder="Name" defaultValue=""/>)
    .add('WideInput validation', () => <WideInput placeholder="Name" defaultValue="" errorMessage='error' valid={false}/>);
