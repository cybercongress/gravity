import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from 'react-slick';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/settings';
import {
    Button, Pane, Text, Icon, Heading, IconButton, Strong,
} from 'evergreen-ui';
import { Row, Col } from 'react-flexbox-grid';
import { throws } from 'assert';
import {
    MainContainer,
    ScrollContainer,
    Avatar,
    // Text,
} from '../..';
import Application from '../Application/Application';

const imgCybMatrix = require('./group-3.png');

const HelloState2 = () => (
    <Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                <Text fontSize='16px' lineHeight={ 1.88 } color='#fff'>
                    xhipster
                </Text>
                , The Matrix is everywhere. It is all around us.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                Even now, in this room. You can see it when you look into your Chrome window, or
                when you turn on your Youtube.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                You can feel it when you Google something, when you go to Facebook, when you pay
                with Paypal. It is the world that has been put over your eyes to blind you from the
                truth.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                I assume that you are enlightened and already know the private keys from your
                Kingdom though. Otherwise you should identify the truth
            </Text>
        </Pane>
    </Pane>
);

const HelloState3a = () => (
    <Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                That you are a slave, xhipster.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                Like everyone else, you were born into bondage, born into a prison that you cannot
                smell, taste, or touch.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                A prison for your mind without an ability to control your identity, your values,
                your data.
            </Text>
        </Pane>
    </Pane>
);

const HelloState4a = () => (
    <Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                Unfortunately, no one can be told what the Matrix is. You have to see it for
                yourself. This is your last chance.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                You take the blue pill - the story ends, you wake up in web2 and you believe
                whatever you want to.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                You take the red pill - you stay in Wonderland and I show you how deep the rabbit
                hole goes.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                What I'm offering is the truth, nothing more.
            </Text>
        </Pane>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                Remember, once you enter new web world there will be no way back…
            </Text>
        </Pane>
    </Pane>
);

const Hello = ({ state }) => (
    <Pane height='100%' maxWidth={ 1200 } marginX='auto' marginY={ 0 }>
        <Pane
          float='left'
          width='50%'
          height='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
            <img src={ imgCybMatrix } />
        </Pane>
        <Pane
          float='right'
          display='flex'
          flexDirection='column'
          justifyContent='center'
            //   alignItems='center'
          width='50%'
          height='100%'
          position='relative'
        >
            <Pane position='absolute' top='20%'>
                {state == '2' && <HelloState2 />}
                {state == '3a' && <HelloState3a />}
                {state == '4a' && <HelloState4a />}
            </Pane>
            <Pane width='100%' position='absolute' bottom='10%'>
                {state == 2 && (
                    <Pane display='flex' justifyContent='space-between'>
                        <Button
                          whiteSpace='nowrap'
                          paddingX={ 50 }
                          height={ 42 }
                          fontSize='18px'
                          borderRadius={ 3 }
                          className='btn-white'
                          letterSpacing={ 0 }
                        >
                            I know the keys
                        </Button>
                        <Button
                          whiteSpace='nowrap'
                          paddingX={ 30 }
                          height={ 42 }
                          fontSize='18px'
                          borderRadius={ 3 }
                          className='btn'
                        >
                            What truth?
                        </Button>
                    </Pane>
                )}
                {state == '3a' && (
                    <Pane width='100%' display='flex' justifyContent='center'>
                        <Button
                          whiteSpace='nowrap'
                          paddingX={ 50 }
                          height={ 42 }
                          fontSize='18px'
                          borderRadius={ 3 }
                          className='btn'
                          letterSpacing={ 0 }
                        >
                            Show me the Matrix
                        </Button>
                    </Pane>
                )}
                {state == '4a' && (
                    <Pane display='flex' justifyContent='space-between'>
                        <Button
                          whiteSpace='nowrap'
                          paddingX={ 50 }
                          height={ 42 }
                          fontSize='18px'
                          borderRadius={ 3 }
                          className='btn-blue'
                          letterSpacing={ 0 }
                        >
                            Stay asleep
                        </Button>
                        <Button
                          whiteSpace='nowrap'
                          paddingX={ 30 }
                          height={ 42 }
                          fontSize='18px'
                          borderRadius={ 3 }
                          className='btn-red'
                        >
                            Wake up
                        </Button>
                    </Pane>
                )}
            </Pane>
        </Pane>
    </Pane>
);

storiesOf('Hello', module)
    .add('2', () => (
        <Application>
            <Hello state='2' />
        </Application>
    ))
    .add('3a', () => (
        <Application>
            <Hello state='3a' />
        </Application>
    ))
    .add('4a', () => (
        <Application>
            <Hello state='4a' />
        </Application>
    ));
