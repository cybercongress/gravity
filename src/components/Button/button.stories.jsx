import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { IconButton, Pane } from 'evergreen-ui';
import { Button } from './ButtonNew';

storiesOf('Elements|Button', module)
    .addDecorator(centered)

    .add('Button Gravity', () => <Button className='btn'>Button</Button>)

    .add('Button Default', () => <Button>Button</Button>)

    .add('Button with an Icon', () => <Button iconBefore='cog'>Button</Button>)

    .add('IconButton', () => (
        <Pane display='flex'>
            <IconButton icon='trash' intent='danger' marginRight={ 10 } />
            <IconButton appearance='minimal' icon='notifications' iconSize={ 18 } />
        </Pane>
    ));
