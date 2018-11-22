import React from 'react';
import {storiesOf} from '@storybook/react';
import {Message, Title} from "../..";
import { addDecorator } from '@storybook/react';

const centered = require('@storybook/addon-centered').default;
addDecorator(centered);

storiesOf('Message', module)
    .add('info', () => (
        <div>
            <Message type='info'>Information message looks like this</Message>
        </div>
    ))
    .add('warning', () => (
        <div>
            <Message type='warning'>Very important warning message</Message>
        </div>
    ))
    .add('error', () => (
        <div>
            <Message type='error'>Error message. Something goes wrong</Message>
        </div>
    ))
    .add('success', () => (
        <div>
            <Message type='success'>Successful! Olala</Message>
        </div>
    ));
