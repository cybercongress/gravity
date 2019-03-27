import React, { Component } from 'react';
import {
    Pane, Text, Link, Pill, Card,
} from 'evergreen-ui';
import { PaneBalance, Avatar } from '../..';

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
              boxShadow='0 0 1px #fff'
                //   onMouseEnter={ () => this.handleHover() }
                //   onMouseLeave={ () => this.handleHover() }
              display='flex'
              flexDirection='column'
              alignItems='center'
              backgroundColor='#000'
              paddingX={ 60 }
              paddingY={ 100 }
                // height={500}
            >
                <Text
                  display='inline-block'
                  marginBottom={ 155 }
                  color='#fff'
                  fontSize={ 24 }
                  fontWeight={ 600 }
                >
                    {balanceGCYB != 0 ? 'Congratulations :-)' : 'You Loose :-('}
                    {' '}
                </Text>
                <Pane width='100%' marginBottom={ 30 }>
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
                        </Pane>
                        <PaneBalance position='relative' display='flex' flexDirection='column'>
                            <Text
                              display='inline-block'
                              marginBottom={ 11 }
                              color='#fff'
                              fontSize={ 30 }
                            >
                                148 ETH
                            </Text>
                            <Text display='inline-block' color='#fff'>
                                0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5
                            </Text>
                        </PaneBalance>
                    </Pane>
                    <Pane display='flex' flexDirection='row'>
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
                        </Pane>
                        <PaneBalance position='relative' display='flex' flexDirection='column'>
                            <Text
                              display='inline-block'
                              marginBottom={ 11 }
                              color='#fff'
                              fontSize={ 30 }
                            >
                                {balanceGCYB}
                                {' '}
GCYB
                            </Text>
                            <Text display='inline-block' color='#fff'>
                                cyber1f9yjqmxh6prsmgpcaqj8lmjnxg644n5074zznm
                            </Text>
                        </PaneBalance>
                    </Pane>
                </Pane>
            </Card>
        );
    }
}
