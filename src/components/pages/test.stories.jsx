import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import {
    Button, Pane, Text, Icon, Heading, IconButton,
} from 'evergreen-ui';
import {
    MainContainer,
    ScrollContainer,
    // Text,
} from '../..';
import Application from '../Application/Application';

class Settings extends Component {
    render() {
        return (
            <ScrollContainer>
                <MainContainer>
                    <Heading marginBottom={ 70 } size={ 900 }>
                        / CYB settings
                    </Heading>
                    <Pane marginBottom={ 55 }>
                        <Heading marginBottom={ 32 } size={ 800 }>
                            Cryptoidentities
                        </Heading>
                        <Pane
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          padding={ 15 }
                          backgroundColor='white'
                          elevation={ 0 }
                          height={ 70 }
                        >
                            <Pane flex={ 1 } display='flex' alignItems='center'>
                                <Icon
                                  icon='user'
                                  size={ 20 }
                                  style={ { color: '#3d70b2' } }
                                  marginRight={ 10 }
                                  title=''
                                />
                                <Text size={ 500 }>Account</Text>
                            </Pane>
                            <Pane>
                                <Button appearance='primary' height={ 40 } onClick={ this.updateIPFS }>
                                    Login
                                </Button>
                            </Pane>
                        </Pane>
                    </Pane>
                    <Pane marginBottom={ 55 }>
                        <Heading marginBottom={ 32 } size={ 800 }>
                            Providers
                        </Heading>
                        <Pane
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          padding={ 15 }
                          backgroundColor='white'
                          elevation={ 0 }
                          height={ 70 }
                        >
                            <Pane flex={ 1 } display='flex' alignItems='center'>
                                <Icon
                                  icon='flash'
                                  size={ 20 }
                                  style={ { color: '#3d70b2' } }
                                  marginRight={ 10 }
                                  title=''
                                />
                                <Text size={ 500 }>IPFS</Text>
                            </Pane>
                            <Pane>
                                <IconButton
                                  icon='chevron-right'
                                  iconSize={ 20 }
                                  intent='#3d70b2'
                                  title=''
                                  appearance='minimal'
                                />
                            </Pane>
                        </Pane>
                        <Pane
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          padding={ 15 }
                          backgroundColor='white'
                          elevation={ 0 }
                          height={ 70 }
                        >
                            <Pane flex={ 1 } display='flex' alignItems='center'>
                                <Icon
                                  icon='th-derived'
                                  size={ 20 }
                                  style={ { color: '#3d70b2' } }
                                  marginRight={ 10 }
                                  title=''
                                />
                                <Text size={ 500 }>CYBERD</Text>
                            </Pane>
                            <Pane>
                                <IconButton
                                  icon='chevron-right'
                                  iconSize={ 20 }
                                  intent='#3d70b2'
                                  title=''
                                  appearance='minimal'
                                />
                            </Pane>
                        </Pane>
                    </Pane>
                    <Pane marginBottom={ 55 }>
                        <Heading marginBottom={ 32 } size={ 800 }>
                            Root Registry
                        </Heading>
                        <Pane
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          padding={ 15 }
                          backgroundColor='white'
                          elevation={ 0 }
                          height={ 70 }
                        >
                            <Pane flex={ 1 } display='flex' alignItems='center'>
                                <Icon
                                  icon='properties'
                                  size={ 20 }
                                  style={ { color: '#3d70b2' } }
                                  marginRight={ 10 }
                                  title=''
                                />
                                <Text size={ 500 }>Cyb Root Registry</Text>
                            </Pane>
                            <Pane>
                                <IconButton
                                  icon='chevron-right'
                                  iconSize={ 20 }
                                  intent='#3d70b2'
                                  title=''
                                  appearance='minimal'
                                />
                            </Pane>
                        </Pane>
                    </Pane>
                    <Pane marginBottom={ 55 }>
                        <Heading marginBottom={ 32 } size={ 800 }>
                            Help
                        </Heading>
                        <Pane
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          padding={ 15 }
                          backgroundColor='white'
                          elevation={ 0 }
                          height={ 70 }
                        >
                            <Pane flex={ 1 } display='flex' alignItems='center'>
                                <Icon
                                  icon='help'
                                  size={ 20 }
                                  style={ { color: '#3d70b2' } }
                                  marginRight={ 10 }
                                  title=''
                                />
                                <Text size={ 500 }>Help articles</Text>
                            </Pane>
                            <Pane>
                                <IconButton
                                  icon='chevron-right'
                                  iconSize={ 20 }
                                  intent='#3d70b2'
                                  title=''
                                  appearance='minimal'
                                />
                            </Pane>
                        </Pane>
                    </Pane>
                </MainContainer>
            </ScrollContainer>
        );
    }
}

storiesOf('test', module).add('Settings', () => (
    <Application>
        <Settings />
    </Application>
));
