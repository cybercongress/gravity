import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pane, TextInput, Button } from 'evergreen-ui';

const FooterCyb = () => (
    <Pane
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      position='absolute'
      bottom={ 0 }
      paddingY={ 20 }
      backgroundColor='#000000'
      zIndex={ 2 }
    >
        <Pane
          flexGrow={ 1 }
          maxWidth={ 1000 }
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='row'
          paddingX='3vw'
        >
            <Pane display='flex' flexDirection='row' marginLeft={ 80 } width='65%'>
                <TextInput
                  height={ 42 }
                  width='100%'
                  marginRight={ 15 }
                  placeholder='Question'
                  fontSize='18px'
                  backgroundColor='transparent'
                  className='input-green'
                />
                <Button
                  whiteSpace='nowrap'
                  paddingX={ 50 }
                  height={ 42 }
                  fontSize='18px'
                  className='btn'
                  borderRadius={ 3 }
                >
                    Cyber it
                </Button>
            </Pane>
        </Pane>
    </Pane>
);

storiesOf('Components', module).add('robotBar', () => <FooterCyb />);
