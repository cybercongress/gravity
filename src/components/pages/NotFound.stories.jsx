import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Pane, Text, Button } from 'evergreen-ui';
import { Vitalick, ScrollContainer, MainContainer } from '../..';
import Application from '../Application/Application';

const NotFound = () => (
    <div>
        <ScrollContainer>
            <MainContainer style={{paddingTop: 0}}>
                <Pane display='flex' justifyContent='space-around' paddingTop='10%'>
                    <Pane>
                        <Vitalick />

                        {/* <Button color='green' dura='rr.cyb'>Go to Root Registry!</Button> */}
                    </Pane>
                    <Pane display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Pane marginBottom={20}>
                            <Text color='#7c7c7c' size={600}>
                                Cyb doesn’t know
                                <b>
                                    { ' ' }
                                    {'dura'}
                                    { ' ' }
                                </b>
                                app yet!
                            </Text>
                        </Pane>
                        <Pane>
                            <Text color='#7c7c7c' size={600}>Go to Chaingear and add it.</Text>
                        </Pane>
                    </Pane>
                </Pane>
            </MainContainer>
        </ScrollContainer>
        <Pane
          display='flex'
          alignItems='center'
          justifyContent='center'
          position='absolute'
          bottom={ 0 }
          height={ 65 }
          width='100%'
          backgroundColor='#000000'
          paddingY={ 12 }
          zIndex={ 2 }
        >
            <Pane alignItems='center' justifyContent='space-between' display='flex' width={ 1000 }>
                <Pane display='flex' alignItems='center'>
                    {/* <Text style={ { paddingBottom: '10px' } }>Your bandwidth:</Text> */}
                    <Text color='#fff' fontSize='18px'>
                        Everybody can add a root app in Chaingear for 10 ETH
                    </Text>
                </Pane>

                <Pane display='flex' marginLeft={ 80 }>
                    <Button whiteSpace='nowrap' paddingX={ 50 } height={ 42 }>
                        Add app
                    </Button>
                </Pane>
            </Pane>
        </Pane>
    </div>
);

storiesOf('cyb/pages/NotFound', module).add('NotFound', () => (
    <Application>
        <NotFound />
    </Application>
));
