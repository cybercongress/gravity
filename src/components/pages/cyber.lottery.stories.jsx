import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Pane, Text, Button, TextInput, Link, Pill, Card, IconButton,
} from 'evergreen-ui';
import {
    Vitalick, ScrollContainer, MainContainer, Avatar,
} from '../..';
import Application from '../Application/Application';

class PaneBalance extends React.Component {
    state = {
        iconCopy: false,
    };

    handleiconCopy() {
        this.setState({ iconCopy: !this.state.iconCopy });
    }

    render() {
        const { children } = this.props;

        return (
            <Pane
              onMouseEnter={ () => this.handleiconCopy() }
              onMouseLeave={ () => this.handleiconCopy() }
              { ...this.props }
            >
                {children}
                {this.state.iconCopy && (
                    <Pane top={ -20 } right={ -7 } position='absolute'>
                        <IconButton appearance='minimal' icon='duplicate' />
                    </Pane>
                )}
            </Pane>
        );
    }
}

class CardAccaunt extends React.Component {
    state = {
        hover: false,
    };

    handleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { balanceGCYB } = this.props;
        return (
            <Card
              elevation={ this.state.hover ? 3 : 0 }
              onMouseEnter={ () => this.handleHover() }
              onMouseLeave={ () => this.handleHover() }
              display='flex'
              flexDirection='column'
              alignItems='center'
              backgroundColor='white'
              paddingX={ 60 }
              paddingY={ 40 }
            >
                <Pane
                  width='100%'
                  borderBottom
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  marginBottom={ 35 }
                >
                    <Pane marginBottom={ 55 }>
                        <Text fontSize={ 24 } fontWeight={ 600 }>
                            { balanceGCYB != 0 ? 'Congratulations :-)' : 'You Loose :-(' }
                            {' '}
                        </Text>
                    </Pane>
                    <Pane marginBottom={ 32 }>
                        <Pane
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          width={ 90 }
                          height={ 90 }
                          backgroundColor='#eff3f6'
                          borderRadius='50%'
                        >
                            <Avatar style={ { borderRadius: '50%' } } />
                        </Pane>
                    </Pane>
                </Pane>
                <Pane width='100%' borderBottom marginBottom={ 30 }>
                    <Pane display='flex' flexDirection='row' marginBottom={ 45 }>
                        <Pane>
                            <Pill
                              height={ 10 }
                              width={ 10 }
                              borderRadius='50%'
                              color='yellow'
                              paddingX={ 0 }
                              isSolid
                              marginRight={ 15 }
                            />
                            {/* <Text fontSize={ 30 }>148 ETH</Text> */}
                        </Pane>
                        <PaneBalance
                          position='relative'
                        >
                            <Pane marginBottom={ 11 }>
                                <Text fontSize={ 30 }>148 ETH</Text>
                            </Pane>
                            <Pane>
                                <Text>0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5</Text>
                            </Pane>
                        </PaneBalance>
                    </Pane>
                    <Pane display='flex' flexDirection='row' marginBottom={ 40 }>
                        <Pane>
                            <Pill
                              height={ 10 }
                              width={ 10 }
                              borderRadius='50%'
                              color='blue'
                              paddingX={ 0 }
                              isSolid
                              marginRight={ 15 }
                            />
                            {/* <Text fontSize={ 30 }>148 ETH</Text> */}
                        </Pane>
                        <PaneBalance position='relative'>
                            <Pane marginBottom={ 11 }>
                                <Text fontSize={ 30 }>{balanceGCYB} GCYB</Text>
                            </Pane>
                            <Pane>
                                <Text>cyber1f9yjqmxh6prsmgpcaqj8lmjnxg644n5074zznm</Text>
                            </Pane>
                        </PaneBalance>
                    </Pane>
                </Pane>

                <Pane>
                    <Link textDecoration='none' href='#' fontSize={ 18 } color='blue'>
                    { balanceGCYB != 0 ? 'I want import my CYB' : 'But you can go and buy' } 
                    </Link>
                </Pane>
            </Card>
        );
    }
}

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
                        <CardAccaunt balanceGCYB={balanceGCYB} />
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
