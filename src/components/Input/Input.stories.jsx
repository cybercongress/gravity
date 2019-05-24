import React from 'react';
import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Input } from './Input';

storiesOf('Elements/Input', module)
    .addDecorator(centered)
    .add('Input', () => <Input autoFocus placeholder="Name" />)
    .add('Disabled', () => <Input disabled className='input-green' placeholder="Name" defaultValue=""/>)
    .add('Validation', () => <Input placeholder="Name" defaultValue="" isInvalid message='error' />);
