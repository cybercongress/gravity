import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from '../..';

storiesOf('commponents/Badge', module).add('Badge', () => (
    <span>
        <span>My registries</span>
        <Badge>1</Badge>
    </span>
));
