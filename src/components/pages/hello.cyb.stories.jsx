import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Slider from 'react-slick';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/settings';
import {
    Button,
    Pane,
    Text,
    Icon,
    Heading,
    IconButton,
    Strong,
    Pill,
    Card,
    Textarea,
    TextInput,
    Tooltip,
    Table,
    FilePicker,
} from 'evergreen-ui';
import { Row, Col } from 'react-flexbox-grid';
import { throws } from 'assert';
import Terminal from 'terminal-in-react';
import {
    MainContainer,
    ScrollContainer,
    Avatar,
    // Text,
} from '../..';
import Application from '../Application/Application';

const imgCybMatrix = require('./cyb.png');

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

const HelloState5ab = () => (
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
                You already did your choise. I have nothing to you.
            </Text>
        </Pane>
    </Pane>
);

const BntGroup = () => (
    <Pane display='flex' flexDirection='column'>
        <Tooltip
          position='left'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                  <Pane
                    marginBottom={ 7 }
                    width='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                      <Text fontWeight='bold' color='#fff'>
                            Soul
                      </Text>
                  </Pane>
                  <Pane>
                      <Text color='#fff'>Enlightened new web user</Text>
                  </Pane>
              </Pane>
) }
        >
            <Button className='btn-group-soul btn-group' />
        </Tooltip>
        <Tooltip
          position='left'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                  <Pane
                    marginBottom={ 7 }
                    width='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                      <Text fontWeight='bold' color='#fff'>
                            Body
                      </Text>
                  </Pane>
                  <Pane>
                      <Text color='#fff'>Created identity</Text>
                  </Pane>
              </Pane>
) }
        >
            <Button className='btn-group-boby btn-group' />
        </Tooltip>
        <Tooltip
          position='left'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                  <Pane
                    marginBottom={ 7 }
                    width='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                      <Text fontWeight='bold' color='#fff'>
                            Immortality
                      </Text>
                  </Pane>
                  <Pane>
                      <Text color='#fff'>Master of keys</Text>
                  </Pane>
              </Pane>
) }
        >
            <Button className='btn-group-imortality btn-group' />
        </Tooltip>
        <Tooltip
          position='left'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                  <Pane
                    marginBottom={ 7 }
                    width='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                      <Text fontWeight='bold' color='#fff'>
                            Security
                      </Text>
                  </Pane>
                  <Pane>
                      <Text color='#fff'>Defended identity</Text>
                  </Pane>
              </Pane>
) }
        >
            <Button className='btn-group-security btn-group' />
        </Tooltip>
        <Tooltip
          position='left'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                  <Pane
                    marginBottom={ 7 }
                    width='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                      <Text fontWeight='bold' color='#fff'>
                            Connection
                      </Text>
                  </Pane>
                  <Pane>
                      <Text color='#fff'>Flexible comunication</Text>
                  </Pane>
              </Pane>
) }
        >
            <Button className='btn-group-intelligence btn-group' />
        </Tooltip>
    </Pane>
);

const HelloState5aa = () => (
    <Pane paddingRight={ 50 }>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                Welcome to the new world,
                {' '}
                <Text fontSize='16px' lineHeight={ 1.88 } color='#fff'>
                    xhipster
                </Text>
                .
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
                I&apos;m trying to free your mind,
                {' '}
                <Text fontSize='16px' lineHeight={ 1.88 } color='#fff'>
                    xhipster
                </Text>
                , but I can only show you the door, you&apos;re the one that has to walk through it
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
                I used the game approach to train you faster and the icons below will reflect your
                progress.
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
                Let’s make our first training!
            </Text>
        </Pane>
    </Pane>
);

const HelloState5ac = () => (
    <Pane paddingRight={ 50 }>
        <Pane marginBottom={ 20 }>
            <Text
              fontSize='16px'
              lineHeight={ 1.88 }
              textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
              color='#4ed6ae'
              letterSpacing={ 1.6 }
              style={ { wordSpacing: 5 } }
            >
                I generated secure, random identity for you. Now there are no forces that can
                control your character and values. You're in control of it. Nobody, even me can not
                know it after encryption.
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
                So, don’t be afraid, make your first step - take a look!
            </Text>
        </Pane>
    </Pane>
);

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

const HelloCardAccaunt = () => (
    <Card
      display='flex'
      flexDirection='column'
      alignItems='center'
        //   backgroundColor='white'
      boxShadow='0 0 1px #fff'
      maxWidth='80%'
      paddingX={ 60 }
      paddingY={ 40 }
        //   position='absolute'
        //   top='10%'
    >
        <Pane
            //   width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          marginBottom={ 35 }
        >
            <Pane marginBottom={ 70 }>
                <Pane
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                  width={ 90 }
                  height={ 90 }
                  borderRadius='50%'
                >
                    <Avatar />
                    <Pane marginTop={ 15 }>
                        <Text fontSize='22px' color='#fff'>
                            xhipster
                        </Text>
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
        <Pane marginBottom={ 30 }>
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
                <PaneBalance position='relative'>
                    <Pane marginBottom={ 11 }>
                        <Text color='#fff' fontSize={ 30 }>
                            148 ETH
                        </Text>
                    </Pane>
                    <Pane>
                        <Text color='#fff'>0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5</Text>
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
                        <Text color='#fff' fontSize={ 30 }>
                            10 GCYB
                        </Text>
                    </Pane>
                    <Pane>
                        <Text color='#fff'>cyber1f9yjqmxh6prsmgpcaqj8lmjnxg644n5074zznm</Text>
                    </Pane>
                </PaneBalance>
            </Pane>
        </Pane>
    </Card>
);

const HelloState11 = () => (
    <Pane marginBottom={ 20 }>
        <Text
          fontSize='16px'
          lineHeight={ 1.88 }
          textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
          color='#4ed6ae'
          letterSpacing={ 1.6 }
          style={ { wordSpacing: 5 } }
        >
            Well, now you are ready to enjoy your web3 experience!
        </Text>
    </Pane>
);

const TextAreaSate7a = () => (
    <Pane position='relative' display='flex' justifyContent='center' height={ 500 } width='100%'>
        <Textarea
          height='100%'
          paddingX={ 20 }
          paddingY={ 20 }
          fontSize='18px'
          placeholder='Add trees...'
          width='80%'
          backgroundColor='#000'
          color='#fff'
          boxShadow='0 0 1px #fff'
          style={ { wordSpacing: 20, resize: 'none' } }
        />
        <Pane bottom='2%' zIndex={ 2 } left='12%' position='absolute'>
            <IconButton appearance='minimal' icon='duplicate' />
        </Pane>
    </Pane>
);

const HelloState8 = () => (
    <Card
      display='flex'
      flexDirection='column'
      alignItems='center'
        //   backgroundColor='white'
      boxShadow='0 0 1px #fff'
      maxWidth='80%'
      paddingX={ 90 }
      paddingY={ 90 }
      minWidth={ 500 }
      minHeight={ 570 }
        //   position='absolute'
        //   top='10%'
    >
        <Pane width='100%' flexGrow={ 1 } marginBottom='20%'>
            <Pane width='100%' marginBottom='5%'>
                <Pane marginBottom='3%'>
                    <Text fontSize='18px' color='#fff'>
                        Password
                    </Text>
                </Pane>
                <Pane width='100%'>
                    <TextInput
                      width='100%'
                      height={ 42 }
                      backgroundColor='transparent'
                      isInvalid
                      color='#fff'
                    />
                </Pane>
            </Pane>
            <Pane width='100%'>
                <Pane marginBottom='3%'>
                    <Text fontSize='18px' color='#fff'>
                        Confirm password
                    </Text>
                </Pane>
                <Pane width='100%'>
                    <TextInput
                      width='100%'
                      height={ 42 }
                      backgroundColor='transparent'
                      color='#fff'
                    />
                </Pane>
            </Pane>
        </Pane>
        <Pane width='100%'>
            <Pane width='100%'>
                <Pane marginBottom='3%'>
                    <Text fontSize='18px' color='#fff'>
                        Confirm password
                    </Text>
                </Pane>
                <Pane width='100%'>
                    <TextInput
                      width='100%'
                      height={ 42 }
                      backgroundColor='transparent'
                      color='#fff'
                    />
                </Pane>
            </Pane>
        </Pane>
    </Card>
);

const TerminalCyb = () => (
    <Pane boxShadow='0 0 1px #fff' height={ 400 }>
        <Pane
          width='100%'
          style={ { borderBottom: '0.1px solid #585757' } }
          paddingY={ 5 }
          display='flex'
          justifyContent='center'
        >
            <Text color='#fff'>cyb</Text>
        </Pane>
        <Terminal
          color='#4ed6ae'
          backgroundColor='black'
          barColor='black'
          style={ {
                fontWeight: 'bold',
                height: 'inherit',
                paddingBottom: 50,
                fontSize: '1em',
            } }
          commands={ {
                'open-google': () => window.open('https://www.google.com/', '_blank'),
                showmsg: 'hello',
                popup: () => alert('Terminal in React'),
            } }
          descriptions={ {
                'open-google': 'opens google.com',
                showmsg: 'shows a message',
                alert: 'alert',
                popup: 'alert',
            } }
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
    </Pane>
);

const ConnectionTable = ({ status }) => (
    <Pane width='100%' paddingRight='10%'>
        <Table>
            <Table.Head>
                <Table.TextHeaderCell>Provider</Table.TextHeaderCell>
                <Table.TextHeaderCell>Endpoint</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body style={ { backgroundColor: '#fff', overflowY: 'hidden' } }>
                <Table.Row isSelectable>
                    <Table.TextCell>
                        {' '}
                        <Pill
                          height={ 8 }
                          width={ 8 }
                          borderRadius='50%'
                          paddingX={ 0 }
                          isSolid
                          marginLeft={ 20 }
                          marginRight={ 25 }
                          color={
                                status == 'local' ? 'green' : status == 'fail' ? 'red' : 'yellow'
                            }
                        />
                        <Text>IPFS read</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput width='80%' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell>
                        <Pill
                          height={ 8 }
                          width={ 8 }
                          borderRadius='50%'
                          color='yellow'
                          paddingX={ 0 }
                          isSolid
                          marginLeft={ 20 }
                          marginRight={ 25 }
                          color={
                                status == 'local' ? 'green' : status == 'fail' ? 'red' : 'yellow'
                            }
                        />
                        <Text>IPFS write</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput width='80%' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell>
                        <Pill
                          height={ 8 }
                          width={ 8 }
                          borderRadius='50%'
                          color='yellow'
                          paddingX={ 0 }
                          isSolid
                          marginLeft={ 20 }
                          marginRight={ 25 }
                          color={
                                status == 'local' ? 'green' : status == 'fail' ? 'red' : 'yellow'
                            }
                        />
                        <Text>Ethereum HTTP</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput width='80%' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell>
                        <Pill
                          height={ 8 }
                          width={ 8 }
                          borderRadius='50%'
                          color='yellow'
                          paddingX={ 0 }
                          isSolid
                          marginLeft={ 20 }
                          marginRight={ 25 }
                          color={
                                status == 'local' ? 'green' : status == 'fail' ? 'red' : 'yellow'
                            }
                        />
                        <Text>Cyberd HTTP</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput width='80%' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row>
                    <Table.TextCell>
                        <Pill
                          height={ 8 }
                          width={ 8 }
                          borderRadius='50%'
                          color='yellow'
                          paddingX={ 0 }
                          isSolid
                          marginLeft={ 20 }
                          marginRight={ 25 }
                          color={
                                status == 'local' ? 'green' : status == 'fail' ? 'red' : 'yellow'
                            }
                        />
                        <Text>Cyberd Ws</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput width='80%' />
                    </Table.TextCell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Pane>
);

// left col -----

const LeftColMatrix = () => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
        <img src={ imgCybMatrix } />
    </Pane>
);

const HelloState4bLeftCol = () => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
        //   paddingTop='10%'
    >
        <Pane>
            <img style={ { width: 390, height: 370 } } src={ imgCybMatrix } />
        </Pane>
        <Pane width='90%'>
            <Pane marginBottom={ 20 }>
                <Text
                  fontSize='16px'
                  lineHeight={ 1.88 }
                  textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
                  color='#4ed6ae'
                  letterSpacing={ 1.6 }
                  style={ { wordSpacing: 5 } }
                >
                    Check your identity.
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
                    If it’s not your what you expected to see, you can go back and import another.
                </Text>
            </Pane>
        </Pane>
    </Pane>
);

const HelloState6aLeftCol = () => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
        //   paddingTop='10%'
    >
        <Pane>
            <img style={ { height: 224 } } src={ imgCybMatrix } />
        </Pane>
        <Pane width='90%'>
            <Pane marginBottom={ 20 }>
                <Text
                  fontSize='16px'
                  lineHeight={ 1.88 }
                  textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
                  color='#4ed6ae'
                  letterSpacing={ 1.6 }
                  style={ { wordSpacing: 5 } }
                >
                    This is your new body,
                    {' '}
                    <Text fontSize='16px' lineHeight={ 1.88 } color='#fff'>
                        xhipster
                    </Text>
                    . In new web world it is a pair of Ethereum and Cyber cryptoaddresses. You need
                    them to operate with funds and interact with apps.
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
                    Your body is weak now - balances are empty. But you can deposit funds on them
                    anytime.
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
                    So, enough for it - take the keys of your identity and become master of your
                    life.
                </Text>
            </Pane>
        </Pane>
    </Pane>
);

const HelloState7aLeftCol = () => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
        //   paddingTop='10%'
    >
        <Pane>
            <img style={ { height: 224 } } src={ imgCybMatrix } />
        </Pane>
        <Pane width='90%'>
            <Pane marginBottom={ 20 }>
                <Text
                  fontSize='16px'
                  lineHeight={ 1.88 }
                  textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
                  color='#4ed6ae'
                  letterSpacing={ 1.6 }
                  style={ { wordSpacing: 5 } }
                >
                    This is your mnemonic phrase. Keep it safe, do not store this phrase on computer
                    or mobile phone! If you lose it - your funds will gone forever.
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
                    You can write this phrase down to a paper, split to several parts and dig them
                    into the ground.
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
                    I didn&apos;t say it would be easy,
                    {' '}
                    <Text fontSize='16px' lineHeight={ 1.88 } color='#fff'>
                        xhipster
                    </Text>
                    . I just said it would be the truth.
                </Text>
            </Pane>
        </Pane>
    </Pane>
);

const HelloState3bLeftCol = () => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      flexDirection='column'
        //   paddingTop='10%'
      paddingBottom='30%'
    >
        <Pane>
            <img style={ { height: 224 } } src={ imgCybMatrix } />
        </Pane>
        <Pane width='90%'>
            <Pane marginBottom={ 20 }>
                <Text
                  fontSize='16px'
                  lineHeight={ 1.88 }
                  textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
                  color='#4ed6ae'
                  letterSpacing={ 1.6 }
                  style={ { wordSpacing: 5 } }
                >
                    We need to import your account. Just paste or type mnemonic phrase in the text
                    field
                </Text>
            </Pane>
        </Pane>
    </Pane>
);

const HelloState8LeftCol = () => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
        //   paddingTop='10%'
    >
        <Pane>
            <img style={ { height: 400 } } src={ imgCybMatrix } />
        </Pane>
        <Pane width='90%'>
            <Pane marginBottom={ 20 }>
                <Text
                  fontSize='16px'
                  lineHeight={ 1.88 }
                  textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
                  color='#4ed6ae'
                  letterSpacing={ 1.6 }
                  style={ { wordSpacing: 5 } }
                >
                    Okay. What do you need now,
                    {' '}
                    <Text fontSize='16px' lineHeight={ 1.88 } color='#fff'>
                        xhipster
                    </Text>
                    ? More security! I’ll encrypt your mnemonic phrase, but you need to create a
                    password.
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
                    Remember, there is no way to restore it, so keep it also safe.
                </Text>
            </Pane>
        </Pane>
    </Pane>
);

const HelloState10LeftCol = () => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='flex-start'
      flexDirection='column'
        //   paddingTop='10%'
    >
        <Pane>
            <img style={ { width: 390, height: 370 } } src={ imgCybMatrix } />
        </Pane>
        <Pane width='90%'>
            <Pane marginBottom={ 20 }>
                <Text
                  fontSize='16px'
                  lineHeight={ 1.88 }
                  textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
                  color='#4ed6ae'
                  letterSpacing={ 1.6 }
                  style={ { wordSpacing: 5 } }
                >
                    This is your connection state. You can change it, if you want.
                </Text>
            </Pane>
        </Pane>
    </Pane>
);

const HelloContainer = ({ children, ...props }) => (
    <ScrollContainer style={ { height: '100vh', paddingBottom: 0 } }>
        <MainContainer style={ { width: 1200, height: 'inherit' } }>
            <Pane display='flex' alignItems='stretch' height='100%' flexDirection='row'>
                {children}
            </Pane>
        </MainContainer>
    </ScrollContainer>
);

const HelloContainerLeftCol = ({ children }) => (
    <Pane
        //  float='left'
      width='50%'
      height='inherit'
    >
        {children}
    </Pane>
);

const HelloContainerRightCol = ({ children, bntGroup }) => (
    <Pane
        // float='right'
      display='flex'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
      width='50%'
      height='initial'
      position='relative'
      marginRight={50}
    >
        <Pane
          display='flex'
          justifyContent='center'
          flexDirection='column'
          flexGrow={ 1 }
          height='100%'
        >
            {children}
        </Pane>
        {bntGroup && (
            <Pane position='fixed' right='3%' top='20%'>
            {bntGroup}
                {/* <BntGroup /> */}
            </Pane>
        )}
    </Pane>
);

const HelloContainerRightColContent = ({ children }) => (
    <Pane
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      width='100%'
      height='100%'
      marginBottom={ 50 }
      flexGrow={ 1 }
    >
        {children}
    </Pane>
);

const HelloContainerRightColBtn = ({ children }) => <Pane width='100%'>{children}</Pane>;

const ConnectionPages = ({ bntGroup, status }) => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <HelloState10LeftCol />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <ConnectionTable status={ status } />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn>
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
                        Check
                    </Button>
                </Pane>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

const SecurityPages = ({bntGroup}) => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <HelloState10LeftCol />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
            <Card
      display='flex'
      flexDirection='column'
      alignItems='center'
        //   backgroundColor='white'
      boxShadow='0 0 1px #fff'
      maxWidth='80%'
      paddingX={ 90 }
      paddingY={ 90 }
      minWidth={ 500 }
    //   minHeight={ 570 }
      height='100%'
        //   position='absolute'
        //   top='10%'
    >
        <Pane width='100%' flexGrow={ 1 } marginBottom='20%'>
            <Pane width='100%' display='flex'>
                <Pane width='100%'>
                <FilePicker
                    multiple
                    width='100%'
                    marginBottom={32} />
                </Pane>
                <Pane>
                    <IconButton appearance="minimal" icon="cross" iconSize={18} />
                </Pane>
                
            </Pane>
        </Pane>
    </Card>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn>
                <Pane width='100%' display='flex' flexDirection='column' alignItems='center'>
                    <Button
                      whiteSpace='nowrap'
                      paddingX={ 50 }
                      height={ 42 }
                      fontSize='18px'
                      borderRadius={ 3 }
                      className='btn'
                      letterSpacing={ 0 }
                      maxWidth={210}
                      marginY={10}
                    >
                        Check
                    </Button>
                </Pane>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

const Hello = ({ state, open, matrix }) => (
    <ScrollContainer style={ { height: '100vh' } }>
        <MainContainer style={ { width: 1200 } }>
            <Pane display='flex' alignItems='stretch' flexDirection='row'>
                <Pane
                    //  float='left'
                  width='50%'
                  height='inherit'
                >
                    {matrix && <LeftColMatrix />}
                    {state === '4b' && <HelloState4bLeftCol />}
                    {state === '3b' && <HelloState3bLeftCol />}
                    {state === '6a' && <HelloState6aLeftCol />}
                    {state === '7a' && <HelloState7aLeftCol />}
                    {state === '8' && <HelloState8LeftCol />}
                </Pane>
                <Pane
                    // float='right'
                  display='flex'
                  flexDirection='row'
                  justifyContent='center'
                  alignItems='center'
                  width='50%'
                  height='inherit'
                  position='relative'
                >
                    <Pane
                      display='flex'
                      justifyContent='center'
                      flexDirection='column'
                      flexGrow={ 1 }
                      height='100%'
                    >
                        <Pane
                          display='flex'
                          justifyContent='center'
                          flexDirection='column'
                          alignItems='center'
                          width='100%'
                          height='100%'
                          marginBottom={ 50 }
                          flexGrow={ 1 }
                        >
                            {state === '1' && <TerminalCyb />}
                            {state === '2' && <HelloState2 />}
                            {state === '3a' && <HelloState3a />}
                            {state === '3b' && <TextAreaSate7a />}
                            {state === '4a' && <HelloState4a />}
                            {state === '4b' && <HelloCardAccaunt />}
                            {state === '5ab' && <HelloState5ab />}
                            {state === '5aa' && <HelloState5aa />}
                            {state === '5ac' && <HelloState5ac />}
                            {state === '6a' && <HelloCardAccaunt />}
                            {state === '7a' && <TextAreaSate7a />}
                            {state === '8' && <HelloState8 />}
                            {state === '11' && <HelloState11 />}
                        </Pane>
                        <Pane width='100%'>
                            {state === '2' && (
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
                            {state === '3a' && (
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
                            {state === '3b' && (
                                <Pane justifyContent='center' display='flex'>
                                    <Pane display='flex' width='80%' justifyContent='space-between'>
                                        <Button
                                          whiteSpace='nowrap'
                                          paddingX={ 50 }
                                          height={ 42 }
                                          fontSize='18px'
                                          borderRadius={ 3 }
                                          className='btn-white'
                                          letterSpacing={ 0 }
                                        >
                                            Back
                                        </Button>
                                        <Button
                                          whiteSpace='nowrap'
                                          paddingX={ 30 }
                                          height={ 42 }
                                          fontSize='18px'
                                          borderRadius={ 3 }
                                          className='btn'
                                        >
                                            Show account
                                        </Button>
                                    </Pane>
                                </Pane>
                            )}
                            {state === '4a' && (
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
                            {state === '4b' && (
                                <Pane justifyContent='center' display='flex'>
                                    <Pane display='flex' width='80%' justifyContent='space-between'>
                                        <Button
                                          whiteSpace='nowrap'
                                          paddingX={ 50 }
                                          height={ 42 }
                                          fontSize='18px'
                                          borderRadius={ 3 }
                                          className='btn-white'
                                          letterSpacing={ 0 }
                                        >
                                            Back
                                        </Button>
                                        <Button
                                          whiteSpace='nowrap'
                                          paddingX={ 30 }
                                          height={ 42 }
                                          fontSize='18px'
                                          borderRadius={ 3 }
                                          className='btn'
                                        >
                                            Encrypt
                                        </Button>
                                    </Pane>
                                </Pane>
                            )}
                            {state === '5aa' && (
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
                                        Encrypt
                                    </Button>
                                </Pane>
                            )}
                            {state === '5ac' && (
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
                                        Show my identity
                                    </Button>
                                </Pane>
                            )}
                            {state === '6a' && (
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
                                        Back up mnemonic
                                    </Button>
                                </Pane>
                            )}
                            {state === '7a' && (
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
                                        I swear, I save
                                    </Button>
                                </Pane>
                            )}
                            {state === '8' && (
                                <Pane justifyContent='center' display='flex'>
                                    <Pane display='flex' width='80%' justifyContent='center'>
                                        <Button
                                          whiteSpace='nowrap'
                                          paddingX={ 50 }
                                          height={ 42 }
                                          fontSize='18px'
                                          borderRadius={ 3 }
                                          className='btn'
                                          letterSpacing={ 0 }
                                        >
                                            Encrypt mnemonic
                                        </Button>
                                    </Pane>
                                </Pane>
                            )}
                            {state === '11' && (
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
                                        Get off the matrix
                                    </Button>
                                </Pane>
                            )}
                        </Pane>
                    </Pane>

                    {open && (
                        <Pane position='fixed' right='3%' top='20%'>
                            <BntGroup />
                        </Pane>
                    )}
                </Pane>
            </Pane>
        </MainContainer>
    </ScrollContainer>
);

storiesOf('Hello', module)
    .add('1', () => (
        <Application>
            <Hello state='1' matrix />
        </Application>
    ))
    .add('2', () => (
        <Application>
            <Hello state='2' matrix />
        </Application>
    ))
    .add('3a', () => (
        <Application>
            <Hello state='3a' matrix />
        </Application>
    ))
    .add('3b', () => (
        <Application>
            <Hello state='3b' open />
        </Application>
    ))
    .add('4a', () => (
        <Application>
            <Hello state='4a' matrix />
        </Application>
    ))
    .add('4b', () => (
        <Application>
            <Hello state='4b' open />
        </Application>
    ))
    .add('5ab', () => (
        <Application>
            <Hello state='5ab' matrix />
        </Application>
    ))
    .add('5aa', () => (
        <Application>
            <Hello state='5aa' open matrix />
        </Application>
    ))
    .add('5ac', () => (
        <Application>
            <Hello state='5ac' open matrix />
        </Application>
    ))
    .add('6a', () => (
        <Application>
            <Hello state='6a' open />
        </Application>
    ))
    .add('7a', () => (
        <Application>
            <Hello state='7a' open />
        </Application>
    ))
    .add('8', () => (
        <Application>
            <Hello state='8' open />
        </Application>
    ))
    .add('11', () => (
        <Application>
            <Hello state='11' open matrix />
        </Application>
    ))
    .add('ConnectionPages', () => (
            <ConnectionPages open />
    ))
    .add('SecurityPages', () => (
            <SecurityPages open />
    ));
