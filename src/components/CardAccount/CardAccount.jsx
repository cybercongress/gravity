import React, { Component } from 'react';
import {
    Pane, Text, Link, Pill, Card,
} from 'evergreen-ui';
import {
    PaneBalance, Avatar,
} from '../..';

export class CardAccount extends React.Component {
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