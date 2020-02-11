import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Avatar } from '../..';

storiesOf('Atoms|Avatar', module) .addDecorator(centered).add('Avatar', () => (
    <Avatar style={{ width: 90, height: 90 }} />
));
