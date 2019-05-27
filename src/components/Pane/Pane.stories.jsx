import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Button, Text, Heading } from 'evergreen-ui';
import { Pane } from './Pane';

storiesOf('Elements/Layout', module)
    .addDecorator(centered)

    .add('Pane', () => (
        <Pane
          height={ 120 }
          width={ 240 }
          display='flex'
          alignItems='center'
          justifyContent='center'
          border='default'
        >
            <Text>Pane</Text>
        </Pane>
    ))
    .add('Layout ', () => (
        <Pane display='flex' width='80vw' padding={ 16 } background='tint2' borderRadius={ 3 }>
            <Pane flex={ 1 } alignItems='center' display='flex'>
                <Heading size={ 600 }>Left Aligned</Heading>
            </Pane>
            <Pane>
                {/* Below you can see the marginRight property on a Button. */}
                <Button marginRight={ 16 }>Button</Button>
                <Button appearance='primary'>Primary Button</Button>
            </Pane>
        </Pane>
    ));
