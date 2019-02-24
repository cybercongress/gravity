import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import {
    Button, Pane, Text, Icon, Heading, IconButton, Strong,
} from 'evergreen-ui';
import { Row, Col } from 'react-flexbox-grid';
import {
    MainContainer,
    ScrollContainer,
    Avatar,
    // Text,
} from '../..';
import Application from '../Application/Application';

const Settings = () => (
    <Pane height='100%'>
        <Row style={ { height: '100%' } }>
            <Col xs={ 8 } style={ { height: '100%' } }>
                <Pane display='flex' alignItems='center' justifyContent='center' height='100%'>
                    <Pane
                      width={ 513 }
                      height={ 628 }
                      borderRadius={ 4 }
                      position='relative'
                      style={ {
                            backgroundImage: 'linear-gradient(to right, #667eea, #764ba2)',
                        } }
                    >
                        <Pane
                          width={ 513 }
                          height={ 628 }
                          borderRadius={ 4 }
                          left={ -18 }
                          top={ -18 }
                          position='relative'
                          style={ {
                                backgroundImage: 'linear-gradient(213deg, #b721ff, #77dff7)',
                            } }
                        >
                            <Pane
                              width={ 513 }
                              height={ 628 }
                              borderRadius={ 4 }
                              left={ -18 }
                              top={ -18 }
                              position='relative'
                              style={ {
                                    backgroundImage: 'linear-gradient(321deg, #9599e2, #8bc6ec)',
                                } }
                            >
                                <Pane
                                  display='flex'
                                  justifyContent='center'
                                  alignItems='center'
                                  flexDirection='column'
                                >
                                    <Heading
                                      size={ 600 }
                                      fontWeight={ 600 }
                                      color='white'
                                      marginTop={ 45 }
                                      marginBottom={ 45 }
                                    >
                                        Check your imported account
                                    </Heading>
                                    <Pane border borderRadius='50%' marginBottom={ 45 }>
                                        <Pane margin={ 20 }>
                                            <Avatar />
                                        </Pane>
                                    </Pane>
                                    <Pane>
                                        <Pane
                                          marginBottom={ 45 }
                                          display='flex'
                                          flexDirection='column'
                                          alignItems='flex-start'
                                        >
                                            <Heading color='white' size={ 800 } marginBottom={ 10 }>
                                                1.44 ETH
                                            </Heading>
                                            <Text
                                              color='white'
                                              size={ 300 }
                                              textTransform='uppercase'
                                            >
                                                0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5
                                            </Text>
                                        </Pane>
                                        <Pane
                                          display='flex'
                                          flexDirection='column'
                                          alignItems='flex-start'
                                        >
                                            <Heading color='white' size={ 800 } marginBottom={ 10 }>
                                                146 GCYB
                                            </Heading>
                                            <Text
                                              color='white'
                                              size={ 300 }
                                              textTransform='uppercase'
                                            >
                                                cyber1f9yjqmxh6prsmgpcaqj8lmjnxg644n5074zznm
                                            </Text>
                                        </Pane>
                                    </Pane>
                                </Pane>
                            </Pane>
                        </Pane>
                    </Pane>
                </Pane>
            </Col>

            <Col xs={ 4 }>
                <Pane
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  backgroundColor='#2b3239'
                  height='100%'
                  paddingLeft='26%'
                  paddingRight='21%'
                >
                    <Pane marginBottom={ 80 }>
                        <Strong color='white' size={ 500 }>
                            If it’s not your account you can go back and import another
                        </Strong>
                    </Pane>
                    <Pane width='100%'>
                        <Pane display='flex' justifyContent='space-between'>
                            <Button iconBefore='arrow-left'>Back</Button>
                            <Button appearance='primary' marginRight='4%' iconAfter='arrow-right'>
                                Next Step
                            </Button>
                        </Pane>
                    </Pane>
                </Pane>
            </Col>
        </Row>
    </Pane>
);

storiesOf('test', module).add('Settings', () => (
    <Application>
        <Settings />
    </Application>
));
