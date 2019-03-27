import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Button, TextInput, Link,
} from 'evergreen-ui';
import {
    ScrollContainer, MainContainer, CardAccount,
} from '../..';
import Application from '../Application/Application';

const Lottery = ({ index, account, balanceGCYB }) => (
    <ScrollContainer>
        <MainContainer>
            <Pane display='flex' flexDirection='column' justifyContent='center' alignItems='center' paddingBottom={60}>
                <Pane display='flex' flexDirection='column' alignItems='center' marginBottom={ 42 }>
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
                      className='btn-check'
                    >
                        Check
                    </Button>
                </Pane>
                {index && (
                    <Pane>
                        <Link fontSize='18px' textDecoration='none' href='#' color='blue'>
                            Details of Satoshi Lottery
                        </Link>
                    </Pane>
                )}
                {account && (
                    <Pane>
                        <CardAccount balanceGCYB={balanceGCYB} />
                    </Pane>
                )}
            </Pane>
        </MainContainer>
    </ScrollContainer>
);

storiesOf('cyber/pages/lottery', module)
    .add('index', () => (
        <Application>
            <Lottery index />
        </Application>
    ))

    .add('account', () => (
        <Application>
            <Lottery account balanceGCYB={1} />
        </Application>
    ))

    .add('balanceGCYB', () => (
        <Application>
            <Lottery account balanceGCYB={0} />
        </Application>
    ));
