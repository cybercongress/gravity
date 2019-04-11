import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Button, TextInput, Link,
} from 'evergreen-ui';
import {
    ScrollContainer, MainContainer, CardAccount,
} from '../..';
import Application from '../Application/Application';

const Lottery = ({ index, account, balanceCyb, addressCyb, addressEth, balanceEth }) => (
    <ScrollContainer>
        <MainContainer>
            <Pane display='flex' flexDirection='column' justifyContent='center' alignItems='center' paddingBottom={60}>
                <Pane display='flex' flexDirection='column' alignItems='center' marginBottom={ 42 }>
                    <Text lineHeight={ 1.5 } color='#fff' fontSize='29px'>
                        Try your luck!
                    </Text>
                    <Text lineHeight={ 1.5 } color='#fff' fontSize='29px'>
                        Check if you have some CYB tokens
                    </Text>
                </Pane>
                <Pane width='100%' display='flex' flexDirection='row' marginBottom={ 50 }>
                    <TextInput
                      width='100%'
                      height={ 42 }
                      marginRight={ 20 }
                      backgroundColor='transparent'
                      outline='0'
                      outlineOffset='0'
                      style={ { caretColor: '#36d6ae', boxShadow: '0 0 1px #fff' } }
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
                        <Link fontSize='18px' textDecoration='none' href='#' color='green'>
                            Details of Satoshi Lottery
                        </Link>
                    </Pane>
                )}
                {account && (
                    <Pane>
                        <CardAccount addressEth={addressEth} addressCyberd={addressCyb} balanceEth={balanceEth} balanceCyberd={balanceCyb} />
                    </Pane>
                )}
            </Pane>
        </MainContainer>
    </ScrollContainer>
);

storiesOf('cyber/lottery', module)
    .add('index', () => (
        <Application>
            <Lottery index />
        </Application>
    ))

    .add('congrats', () => (
        <Application>
            <Lottery
              account
              addressEth='0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5'
              addressCyb='cyber1f9yjqmxh6prsmgpcaqj8lmjnxg644n5074zznm'
              balanceEth={ 2 }
              balanceCyb={ 2000000000 }
            />
        </Application>
    ))

    .add('loose', () => (
        <Application>
            <Lottery
              account
              addressEth='0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5'
              balanceEth={ 2 }
              balanceCyb={ 0 }
            />
        </Application>
    ));
