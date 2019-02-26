import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Button, TextInput, Link,
} from 'evergreen-ui';
import { Vitalick, ScrollContainer, MainContainer } from '../..';
import Application from '../Application/Application';

const Lottery = () => (
        <ScrollContainer>
            <MainContainer>
                <Pane
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                    <Pane
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                      marginBottom={ 42 }
                    >
                        <Text lineHeight={ 1.5 } color='#425a70' fontSize='29px'>
                            Try your luck!
                        </Text>
                        <Text lineHeight={ 1.5 } color='#425a70' fontSize='29px'>
                            Check if you have some CYB tokens
                        </Text>
                    </Pane>
                    <Pane width='100%' display='flex' flexDirection='row' marginBottom={ 30 }>
                        <TextInput
                          width='100%'
                          height={ 42 }
                          marginRight={ 20 }
                          placeholder='paste your Ethereum address'
                        />
                        <Button
                          style={ {
                                color: '#fff',
                                backgroundImage: 'linear-gradient(to top, #ec407a, #e91e63)',
                            } }
                          paddingX={ 50 }
                          height={ 42 }
                        >
                            Check
                        </Button>
                    </Pane>
                    <Pane>
                        <Link href='#' cursor='pointer' textDecoration='none'>
                            <Text color='#1070ca' sfontSize='18px'>
                                Details of Satoshi Lottery
                            </Text>
                        </Link>
                    </Pane>
                </Pane>
            </MainContainer>
        </ScrollContainer>
);

storiesOf('cyber/pages', module).add('lottery', () => (
    <Application>
        <Lottery />
    </Application>
));
