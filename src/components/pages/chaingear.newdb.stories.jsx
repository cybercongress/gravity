import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Button, Card, IconButton,
} from 'evergreen-ui';
import { MainContainer, ScrollContainer, Avatar } from '../..';
import Application from '../Application/Application';

const TextNewDB = ({ children, ...props }) => (
    <Text { ...props } display='inline-block' color='#fff' opacity={ 0.8 }>
        {children}
    </Text>
);

const NewDataBase = ({ addressEth }) => (
    <ScrollContainer>
        <MainContainer
          style={ {
                paddingBottom: '3vh',
                paddingTop: '4vh',
                maxWidth: 1000,
                width: 'auto',
            } }
        >
            <Pane display='flex' alignItems='center' justifyContent='center'>
                <Card
                  boxShadow='0 0 20px #36d6ae'
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  backgroundColor='#000'
                  paddingX='3vw'
                  paddingY='5vh'
                  maxHeight={ 550 }
                  maxWidth={ 410 }
                >
                    <Pane
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                      marginBottom={ 30 }
                    >
                        <Avatar style={ { maxHeight: 70, width: 'auto' } } />
                        <TextNewDB marginTop='1vh' fontSize='1em' opacity={ 1 }>
                            asadovka
                        </TextNewDB>
                    </Pane>

                    <Pane width='100%' display='flex' flexDirection='column' marginBottom={ 40 }>
                        <TextNewDB textAlign='center' fontSize='24px' marginBottom={ 8 }>
                            Schema initialization
                            {' '}
                        </TextNewDB>
                        <TextNewDB fontSize='11px'>
                            Receiver:
                            {addressEth}
                        </TextNewDB>
                    </Pane>
                    <Pane marginBottom={ 20 }>
                        <TextNewDB marginBottom={ 7 } fontSize='1em'>
                            Message
                        </TextNewDB>
                        <TextNewDB fontSize='11px' lineHeight={ 1.7 }>
                            asdovka, please, confirm payment of 10 ETH to initialize schema in
                            ‘Appstore’ database.
                        </TextNewDB>
                    </Pane>
                    <Pane
                      marginBottom={ 42 }
                      display='flex'
                      flexDirection='column'
                      justifyContent='flex-start'
                      width='100%'
                    >
                        <TextNewDB marginBottom={ 7 } fontSize='1em'>
                            Details
                        </TextNewDB>
                        <TextNewDB fontSize='11px'>Ethereum Mainnet transaction</TextNewDB>
                        <Pane display='flex' alignItems='center'>
                            <TextNewDB fontSize='11px'>Fee: 0.001 ETH </TextNewDB>
                            <IconButton
                              appearance='minimal'
                              icon='cog'
                              iconSize={ 16 }
                              className='icon-btn'
                            />
                        </Pane>
                    </Pane>
                    <Pane width='100%' display='flex' justifyContent='space-between'>
                        <Button
                          height={ 42 }
                          display='flex'
                          justifyContent='center'
                          minWidth={ 114 }
                          paddingX={ 30 }
                          className='btn'
                        >
                            Reject
                        </Button>
                        <Button
                          height={ 42 }
                          minWidth={ 114 }
                          paddingX={ 30 }
                          display='flex'
                          justifyContent='center'
                          className='btn'
                        >
                            Pay
                        </Button>
                    </Pane>
                </Card>
            </Pane>
        </MainContainer>
    </ScrollContainer>
);

storiesOf('chaingear/databases', module).add('newdb', () => (
    <Application>
        <NewDataBase addressEth='0x60d0cC2aE15859f69bF74DADb8AE3Bd58434976b' />
    </Application>
));
