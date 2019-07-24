import React from 'react';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import { Pane } from 'evergreen-ui';
import { Badge } from './Badge';

storiesOf('Elements|Badge & Pill', module)
.addDecorator(centered)
.add('Badge', () => (
    <Pane>
        <Pane marginX={10} marginBottom={15}>
            <span>My registries</span>
            <Badge color="blue" isSolid marginLeft={5}>1</Badge>
        </Pane>
        <Pane display="flex">
            <Pane marginX={10}>
                <Badge color="green">Success</Badge>
            </Pane>
            <Pane marginX={10}>
                <Badge color="green" isSolid>Success</Badge>
            </Pane>
        </Pane>
    </Pane>
));
