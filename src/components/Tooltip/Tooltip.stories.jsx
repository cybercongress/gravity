import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
    Tooltip, IconButton, Pane, Icon, Paragraph,
} from 'evergreen-ui';

storiesOf('Elements/Tooltip', module)
    .addDecorator(centered)
    .add('Tooltip', () => (
        <Tooltip content='Edit title'>
            <IconButton icon='edit' />
        </Tooltip>
    ))
    .add('Tooltip Card', () => (
        <Tooltip content={ <Paragraph margin={ 40 }>Card appearance</Paragraph> } appearance='card'>
            <IconButton icon='edit' />
        </Tooltip>
    ))
    .add('Position tooltip', () => (
        <Pane display='flex' justifyContent='space-between'>
            <Tooltip content='Top' position='top'>
                <IconButton marginX={ 30 } icon='arrow-up' />
            </Tooltip>
            <Tooltip content='Right' position='right'>
                <IconButton marginX={ 30 } icon='arrow-right' />
            </Tooltip>
            <Tooltip content='Bottom' position='Bottom'>
                <IconButton marginX={ 30 } icon='arrow-down' />
            </Tooltip>
            <Tooltip content='Left' position='left'>
                <IconButton marginX={ 30 } icon='arrow-left' />
            </Tooltip>
        </Pane>
    ));
