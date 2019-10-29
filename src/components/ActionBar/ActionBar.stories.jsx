import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pane, TextInput } from 'evergreen-ui';
import { ActionBar, Button, Input } from '../../index';

const FooterCyb = () => (
    <ActionBar>
        <Pane display='flex' flexDirection='row' width='65%'>
            {/* <TextInput
              height={ 42 }
              width='100%'
              marginRight={ 15 }
              placeholder='Question'
              fontSize='18px'
              backgroundColor='transparent'
              className='input-green'
            /> */}
            <Input marginRight={ 15 } isInvalid message='enter round 53 to 60' />
            <Button>
                Cyber it
            </Button>
        </Pane>
    </ActionBar>
);

storiesOf('Molecules|actionBar', module).add('actionBar', () => <FooterCyb />);
