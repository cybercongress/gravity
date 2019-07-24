import React from 'react';
import {storiesOf} from '@storybook/react';
import centered from '@storybook/addon-centered';
import {Message, Title} from "../..";
import { addDecorator } from '@storybook/react';

storiesOf('Elements|Message', module)
    .addDecorator(centered)
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
