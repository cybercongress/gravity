import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane,
} from 'evergreen-ui';
import {NavigationLeft} from '../../..';
import ToggleMenu from '../../Application/ToggleMenu';

const RobotBar = ({openMenu}) => (
    <Pane height='100%' paddingX='2em' display='flex' justifyContent='start' paddingY='2em' backgroundColor='#000'>
        <NavigationLeft>
            <ToggleMenu openMenu={ openMenu } />
        </NavigationLeft>
    </Pane>
);

storiesOf('Molecules|robotBar', module).add('robotBar', () => <RobotBar />);
