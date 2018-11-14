import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from "../..";

storiesOf('Title', module)
    .add('inline title', () => (
        <Title>I'm a title</Title>
    ));
