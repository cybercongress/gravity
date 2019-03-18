import React, { Component } from 'react';
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
    //  Tooltip,
    Table,
    FilePicker,
    Checkbox,
} from 'evergreen-ui';
import { Row, Col } from 'react-flexbox-grid';
import Terminal from 'terminal-in-react';
import {
    Avatar,
    // Text,
    ToolTip,
} from '../../..';
import { BntGroupFull } from './btn.group.full';

const CybMatrix = require('./cyb.png');
const cybRed = require('./cyb-red.png');
const cybEye = require('./eye.jpg');
const cybEye2 = require('./cybEye2.png');
const idrobot = require('./idrobot.png');
const imgEth = require('../AppMenu/eth.svg');

const Eth = () => (
    <Pane width={ 32 } height={ 32 }>
        <img src={ imgEth } />
    </Pane>
);

const GCyb = () => (
    <Pane display='flex' paddingX={ 7 }>
        <Pill
            height={ 7.8 }
            width={ 7.8 }
            borderRadius='50%'
            paddingX={ 0 }
            isSolid
            boxShadow='0 0 9px 1.5px #4ed6ae'
            backgroundColor='#36d6ae'
        />
    </Pane>
);

const BntGroup = () => (
    <Pane display='flex' flexDirection='column'>
        <ToolTip
        //   left={0}
        //   top={0}
        top={0}
        right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={200}
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
        </ToolTip>
        <ToolTip
        top={0}
        right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={200}
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
        </ToolTip>
        <ToolTip
          top={0}
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={200}
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
        </ToolTip>
        <ToolTip
          top={0}
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={200}
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
        </ToolTip>
        <ToolTip
          top={0}
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={200}
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
        </ToolTip>
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
      paddingY='10%'
      maxHeight={ 500 }
    >
        <Pane
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          marginBottom='25%'
        >
            <Pane maxHeight={ 90 } height='10vh'>
                <Avatar style={ { maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' } } />
            </Pane>
            <Text display='inline-block' marginTop='10%' fontSize='22px' color='#fff'>
                xhipster
            </Text>
        </Pane>
        <Pane display='flex' flexDirection='row' marginBottom='15%'>
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
                <Text display='inline-block' marginBottom='5%' color='#fff' fontSize={ 30 }>
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
            {/* <Text fontSize={ 30 }>148 ETH</Text> */}
            <PaneBalance position='relative'>
                <Text display='inline-block' marginBottom='5%' color='#fff' fontSize={ 30 }>
                    10 GCYB
                </Text>
                <Text display='inline-block' color='#fff'>
                    cyber1f9yjqmxh6prsmgpcaqj8lmjnxg644n5074zznm
                </Text>
            </PaneBalance>
        </Pane>
    </Card>
);

const HelloContainer = ({ children, ...props }) => (
    // <ScrollContainer>
    <Pane
      position='absolute'
      height='100%'
      width='100%'
      top={ 0 }
      left={ 0 }
      overflowY='auto'
      backgroundColor='#000'
    >
        <Pane
          maxWidth={ 1269 }
          position='absolute'
          top={ 0 }
          right={ 0 }
          left={ 0 }
          bottom={ 0 }
          marginY='auto'
          marginX='auto'
          paddingY={ 65 }
        >
            {/* <MainContainer style={ { width: 1200 } }>  */}
            <Pane display='flex' alignItems='stretch' height='100%' flexDirection='row'>
                {children}
            </Pane>
            {/* </MainContainer> */}
        </Pane>
    </Pane>
    // </ScrollContainer>
);

const HelloContainerLeftCol = ({ children }) => (
    <Pane
        //  float='left'
      width='calc((100% - 20px * 2) / 2)'
      height='inherit'
      paddingX={20}
    //   marginX={ 30 }
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
      width='calc((100% - 20px * 2) / 2)'
      height='initial'
      position='relative'
    //   marginX={ 50 }
      paddingX={20}
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
            <Pane position='fixed' right='3%' top={0} height='100vh' display='flex' alignItems='center' >
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

const HelloContainerRightColBtn = ({ children, center, ...props }) => (
    <Pane
      width='100%'
      { ...props }
      display='flex'
      justifyContent={ center ? 'center' : 'space-between' }
    >
        {children}
    </Pane>
);

const BigImg = ({ srcBigImg }) => (
    <Pane
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
        <img style={ { width: '100%' } } src={ srcBigImg || CybMatrix } />
    </Pane>
);

const SlallImgText = ({ imgCyb, children }) => (
    <Pane
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-evenly'
      height='100%'
    >
        <img style={ { height: 270 } } src={ imgCyb } />
        <Pane>{children}</Pane>
    </Pane>
);

const ButtonEverGreen = ({ children, custonClass, ...props }) => (
    <Button
      whiteSpace='nowrap'
      paddingX={ 50 }
      height={ 42 }
      minWidth={ 200 }
      display='flex'
      justifyContent='center'
      fontSize='18px'
      borderRadius={ 3 }
      className={ custonClass || 'btn' }
      letterSpacing={ 0 }
      { ...props }
    >
        {children}
    </Button>
);

const TextIlineBlock = ({ children, ...props }) => (
    <Text
      fontSize='16px'
      lineHeight={ 1.88 }
      textShadow='0 16px 32px rgba(0, 0, 0, 0.4)'
      color='#4ed6ae'
      letterSpacing={ 1.6 }
      style={ { wordSpacing: 5 } }
      display='inline-block'
      { ...props }
    >
        {children}
    </Text>
);

const TextAreaImportMnemonic = () => (
    <Pane position='relative' display='flex' justifyContent='center' height={ 500 } width='100%'>
        <Textarea
          height='100%'
          paddingX={ 20 }
          paddingY={ 20 }
          fontSize='18px'
          placeholder='Add trees...'
          width='90%'
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

const TerminalCyb = () => (
    <Pane width='100%' height={ 400 } boxShadow='0 0 1px #fff'>
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
          msg='You.'
        />
    </Pane>
);

const ConnectionTable = ({ status }) => (
    <Pane width='100%'>
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

const StateCybTable = () => (
    <Pane width='100%'>
        <Table>
            <Table.Head>
                <Table.TextHeaderCell flexGrow={6}>Component</Table.TextHeaderCell>
                <Table.TextHeaderCell textAlign='center' flexGrow={1}>Export</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body style={ { backgroundColor: '#fff', overflowY: 'hidden' } }>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={20} flexGrow={6}>
                        <Text>tx.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={1}>
                        <Pane width='100%' display='flex' justifyContent='center' >
                            <Checkbox />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={20} flexGrow={6}>
                        <Text>path.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={1}>
                        <Pane width='100%' display='flex' justifyContent='center' >
                            <Checkbox checked />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={20} flexGrow={6}>
                        <Text>root.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={1}>
                        <Pane width='100%' display='flex' justifyContent='center' >
                            <Checkbox />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={20} flexGrow={6}>
                        <Text>connect.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={1}>
                        <Pane width='100%' display='flex' justifyContent='center' >
                            <Checkbox checked />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={20} flexGrow={6}>
                        <Text>pins.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={1}>
                        <Pane width='100%' display='flex' justifyContent='center' >
                            <Checkbox />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Pane>
);


export const ConnectionPages = ({ status }) => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <SlallImgText imgCyb={ cybEye }>
                <TextIlineBlock>
                    This is your connection state. You can change it, if you want.
                </TextIlineBlock>
            </SlallImgText>
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <ConnectionTable status={ status } />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Check</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const TerminalCybPages = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <TerminalCyb />
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const SecurityImportSettingsPages = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <SlallImgText imgCyb={ cybRed }>
                <TextIlineBlock marginBottom={ 10 }>
                    You can skip this step if you are the firsrt time outside the matrix.
                </TextIlineBlock>
                <TextIlineBlock>
                    If you have backup of your state, you can import it.
                </TextIlineBlock>
            </SlallImgText>
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <Card
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  boxShadow='0 0 1px #fff'
                  maxWidth='80%'
                  paddingX={ 90 }
                  paddingY={ 90 }
                  minWidth={ 500 }
                  maxHeight={ 500 }
                  height='100%'
                >
                    <Pane width='100%' display='flex' alignItems='center'>
                        <FilePicker marginRight={ 10 } multiple width='100%' />
                        <IconButton
                          paddingX={ 5 }
                          paddingY={ 5 }
                          appearance='minimal'
                          icon='cross'
                          iconSize={ 18 }
                        />
                    </Pane>
                </Card>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Start from scratch</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const TextInputError = ({ isInvalid, ...props }) => (
    <Pane position='relative'>
        <TextInput
          width='100%'
          height={ 42 }
          backgroundColor='transparent'
          color='#fff'
          height='6vh'
          maxHeight={ 42 }
          isInvalid={ isInvalid }
          paddingX={ 10 }
          { ...props }
        />
        {isInvalid && (
            <Pane
              position='absolute'
              left={ 0 }
              bottom='-50%'
              width='100%'
              display='flex'
              alignItems='center'
            >
                <Icon icon='info-sign' color='danger' size={ 11 } marginRight={ 5 } />
                <Pane>
                    <Text fontSize='11px' color='#ec4c47'>
                        Passwords don't mutch
                    </Text>
                </Pane>
            </Pane>
        )}
    </Pane>
);

export const SecurityCreatePasswordPages = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <SlallImgText imgCyb={ cybRed }>
                <TextIlineBlock marginBottom={ 10 }>
                    Okay. What do you need now,
                    {' '}
                    <Text fontSize='16px' lineHeight={ 1.88 } color='#fff'>
                        xhipster
                    </Text>
                    ? More security! I’ll encrypt your mnemonic phrase, but you need to create a
                    password.
                </TextIlineBlock>
                <TextIlineBlock>
                    Remember, there is no way to restore it, so keep it also safe.
                </TextIlineBlock>
            </SlallImgText>
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <Card
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  boxShadow='0 0 1px #fff'
                  maxWidth='80%'
                  paddingX='8vh'
                  paddingY='8vh'
                  minWidth={ 500 }
                  maxHeight={ 500 }
                  height='100%'
                >
                    <Pane width='100%' flexGrow={ 1 } marginBottom='6%'>
                        <Pane width='100%' marginBottom='6%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                Password
                            </Text>
                            <TextInputError />
                        </Pane>
                        <Pane width='100%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                Confirm password
                            </Text>
                            <TextInputError />
                        </Pane>
                    </Pane>
                    <Pane width='100%'>
                        <Text
                          marginBottom='3%'
                          display='inline-block'
                          fontSize='1.12rem'
                          color='#fff'
                        >
                            Confirm password
                        </Text>
                        <TextInputError isInvalid />
                    </Pane>
                </Card>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen disabled={ false }>Encrypt mnemonic</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const CardWalletPages = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <SlallImgText imgCyb={ cybEye }>
                <TextIlineBlock marginBottom={ 10 }>Check your identity.</TextIlineBlock>
                <TextIlineBlock>
                    If it’s not your what you expected to see, you can go back and import another.
                </TextIlineBlock>
            </SlallImgText>
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <HelloCardAccaunt />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn paddingX='10%'>
                <ButtonEverGreen custonClass='btn-white'>Back</ButtonEverGreen>
                <ButtonEverGreen>Encrypt</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const CardWalletPagesBackUpMnemonic = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <SlallImgText imgCyb={ cybEye2 }>
                <TextIlineBlock marginBottom={ 10 }>
                    This is your new body,
                    {' '}
                    <Text fontSize='16px' color='#fff'>
                        xhipster
                    </Text>
                    . In new web world it is a pair of Ethereum and Cyber cryptoaddresses. You need
                    them to operate with funds and interact with apps.
                </TextIlineBlock>
                <TextIlineBlock marginBottom={ 10 }>
                    Your body is weak now - balances are empty. But you can deposit funds on them
                    anytime.
                </TextIlineBlock>
                <TextIlineBlock>
                    So, enough for it - take the keys of your identity and become master of your
                    life.
                </TextIlineBlock>
            </SlallImgText>
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <HelloCardAccaunt />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Back up mnemonic</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const ImportAccountPages = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <SlallImgText imgCyb={ cybEye }>
                <TextIlineBlock>
                    We need to import your account. Just paste or type mnemonic phrase in the text
                    field
                </TextIlineBlock>
            </SlallImgText>
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <TextAreaImportMnemonic />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn paddingX='5%'>
                <ButtonEverGreen custonClass='btn-white'>Back</ButtonEverGreen>
                <ButtonEverGreen>Show account</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const ImportAccountShowMnemonic = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <SlallImgText imgCyb={ cybEye2 }>
                <TextIlineBlock marginBottom={ 10 }>
                    This is your mnemonic phrase. Keep it safe, do not store this phrase on computer
                    or mobile phone! If you lose it - your funds will gone forever.
                </TextIlineBlock>
                <TextIlineBlock marginBottom={ 10 }>
                    You can write this phrase down to a paper, split to several parts and dig them
                    into the ground.
                </TextIlineBlock>
                <TextIlineBlock marginBottom={ 10 }>
                    I didn't say it would be easy,
                    {' '}
                    <Text fontSize='16px' color='#fff'>
                        xhipster
                    </Text>
                    . I just said it would be the truth.
                </TextIlineBlock>
            </SlallImgText>
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <TextAreaImportMnemonic />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>I swear, I save</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const GetOffTheMatrix = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <TextIlineBlock>
                    Well, now you are ready to enjoy your web3 experience!
                </TextIlineBlock>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Get off the matrix</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const UserChoice = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <TextIlineBlock>You already did your choise. I have nothing to you.</TextIlineBlock>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const WelcomeNewWorld = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ cybEye } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        Welcome to the new world,
                        {' '}
                        <Text fontSize='18px' color='#fff'>
                            xhipster
                        </Text>
                        .
                    </TextIlineBlock>
                    <TextIlineBlock marginBottom={ 20 }>
                        I'm trying to free your mind,
                        {' '}
                        <Text fontSize='18px' color='#fff'>
                            xhipster
                        </Text>
                        , but I can only show you the door, you're the one that has to walk through
                        it.
                    </TextIlineBlock>
                    <TextIlineBlock marginBottom={ 20 }>
                        I used the game approach to train you faster and the icons below will
                        reflect your progress.
                    </TextIlineBlock>
                    <TextIlineBlock>Let’s make our first training!</TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Encrypt</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const GeneratedSecure = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ cybEye } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        I generated secure, random identity for you. Now there are no forces that
                        can control your character and values. You're in control of it. Nobody, even
                        me can not know it after encryption.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        So, don’t be afraid, make your first step - take a look!
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Show my identity</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const ThatYouSlave = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ CybMatrix } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        That you are a slave, xhipster.
                        {' '}
                    </TextIlineBlock>
                    <TextIlineBlock marginBottom={ 20 }>
                        Like everyone else, you were born into bondage, born into a prison that you
                        cannot smell, taste, or touch.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        A prison for your mind without an ability to control your identity, your
                        values, your data.
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Show me the Matrix</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const LastChance = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ CybMatrix } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        Unfortunately, no one can be told what the Matrix is. You have to see it for
                        yourself. This is your last chance.
                    </TextIlineBlock>
                    <TextIlineBlock marginBottom={ 20 }>
                        You take the blue pill - the story ends, you wake up in web2 and you believe
                        whatever you want to.
                    </TextIlineBlock>
                    <TextIlineBlock marginBottom={ 20 }>
                        You take the red pill - you stay in Wonderland and I show you how deep the
                        rabbit hole goes. What I'm offering is the truth, nothing more.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        Remember, once you enter new web world there will be no way back…
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn>
                <ButtonEverGreen custonClass='btn-blue'>Stay asleep</ButtonEverGreen>
                <ButtonEverGreen custonClass='btn-red'>Wake up</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const MatrixEverywhere = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ CybMatrix } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        <Text color='#fff' fontSize='18px'>
                            xhipster
                        </Text>
                        , The Matrix is everywhere. It is all around us.
                    </TextIlineBlock>
                    <TextIlineBlock marginBottom={ 20 }>
                        Even now, in this room. You can see it when you look into your Chrome
                        window, or when you turn on your Youtube.
                    </TextIlineBlock>
                    <TextIlineBlock marginBottom={ 20 }>
                        You can feel it when you Google something, when you go to Facebook, when you
                        pay with Paypal. It is the world that has been put over your eyes to blind
                        you from the truth.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        I assume that you are enlightened and already know the private keys from
                        your Kingdom though. Otherwise you should identify the truth
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn>
                <ButtonEverGreen custonClass='btn-white'>I know the keys</ButtonEverGreen>
                <ButtonEverGreen>What truth?</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const FollowYourWeb3 = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <TextIlineBlock>
                    Follow your web3 soul bravely, xhipster!
                </TextIlineBlock>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const IdCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <Pane
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                >
                <Pane marginBottom={ 40 } display='flex' flexDirection='column' alignItems='flex-start'>
                    <Pane alignItems='center' display='flex' flexDirection='row' marginBottom={10}>
                        <Text display='inline-block' marginRight={ 13 } color='#fff' fontSize='24px'>
                            10
                        </Text>
                        <Pane display='flex' alignItems='center'>
                            <Eth />
                            <Eth />
                        </Pane>
                    </Pane>
                    <Text fontSize='14px' color='#d1d1d1'>0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5</Text>
                </Pane>
                <Pane display='flex' flexDirection='column' alignItems='flex-start'>
                    <Pane display='flex' alignItems='center' flexDirection='row' marginBottom={10}>
                        <Text display='inline-block' marginRight={ 13 } color='#fff' fontSize='24px'>
                            10
                        </Text>
                        <Pane display='flex' alignItems='center'>
                            <GCyb />
                            <GCyb />
                            <GCyb />
                            <GCyb />
                        </Pane>
                    </Pane>
                    <Text fontSize='14px' color='#d1d1d1'>0x92dF5e8886dA04fe4EB648d46e1Eeaaaa92256E5</Text>
                </Pane>
                </Pane>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const KeysCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
            <HelloContainerRightColContent>
                <TextAreaImportMnemonic />
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const ConnectCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <ConnectionTable />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>
                    Check
                </ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const ShieldCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup /> }>
            <HelloContainerRightColContent>
                <Card
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    boxShadow='0 0 1px #fff'
                    maxWidth='80%'
                    paddingX='8vh'
                    paddingY='8vh'
                    minWidth={ 500 }
                    maxHeight={ 500 }
                    height='100%'
                    >
                    <Pane width='100%' marginBottom='6%'>
                        <Pane width='100%' marginBottom='6%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                Current password
                            </Text>
                            <TextInputError />
                        </Pane>
                        <Pane width='100%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                New password
                            </Text>
                            <TextInputError />
                        </Pane>
                    </Pane>
                    <Pane width='100%'>
                        <Text
                          marginBottom='3%'
                          display='inline-block'
                          fontSize='1.12rem'
                          color='#fff'
                        >
                            Confirm new password
                        </Text>
                        <TextInputError isInvalid />
                    </Pane>
                </Card>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>
                    Save Password
                </ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const RootCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        <Text color='#fff' fontSize='18px'>
                            xhipster
                        </Text>
                        , The Matrix is everywhere. It is all around us.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        Even now, in this room. You can see it when you look into your Chrome
                        window, or when you turn on your Youtube.
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const TxCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        <Text color='#fff' fontSize='18px'>
                            xhipster
                        </Text>
                        , The Matrix is everywhere. It is all around us.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        Even now, in this room. You can see it when you look into your Chrome
                        window, or when you turn on your Youtube.
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const PathCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        <Text color='#fff' fontSize='18px'>
                            xhipster
                        </Text>
                        , The Matrix is everywhere. It is all around us.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        Even now, in this room. You can see it when you look into your Chrome
                        window, or when you turn on your Youtube.
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const PinsCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
                <Pane>
                    <TextIlineBlock marginBottom={ 20 }>
                        <Text color='#fff' fontSize='18px'>
                            xhipster
                        </Text>
                        , The Matrix is everywhere. It is all around us.
                    </TextIlineBlock>
                    <TextIlineBlock>
                        Even now, in this room. You can see it when you look into your Chrome
                        window, or when you turn on your Youtube.
                    </TextIlineBlock>
                </Pane>
            </HelloContainerRightColContent>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const StateCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroup />}>
            <HelloContainerRightColContent>
                <StateCybTable />
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>
                    Export selected
                </ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const SuccessfulLogin = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
            <Card
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    boxShadow='0 0 1px #fff'
                    maxWidth='80%'
                    paddingX='3vh'
                    paddingY='3vh'
                    minWidth={ 500 }
                    maxHeight={ 500 }
                    height='100%'
                    >
                    <Pane width='100%' display='flex' flexDirection='column' alignItems='flex-center'>
                    <TextIlineBlock style={{ wordSpacing: '1px', lineHeight: 1.5 }} marginBottom={5}>
                            Welcome back, xhipster.
                        </TextIlineBlock>
                        <TextIlineBlock style={{ wordSpacing: '1px' }}>
                            Please, unlock your state.
                        </TextIlineBlock>
                    </Pane>
                    <Pane width='80%' display='flex' flexDirection='column' justifyContent='center' height='100%' marginBottom='6%'>
                        <Pane width='100%' marginBottom='6%'>
                            <TextInputError />
                        </Pane>
                    </Pane>
                </Card>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>
                Unlock
                </ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);

export const FailLogin = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg />
        </HelloContainerLeftCol>
        <HelloContainerRightCol>
            <HelloContainerRightColContent>
            <Card
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    boxShadow='0 0 1px #fff'
                    maxWidth='80%'
                    paddingX='3vh'
                    paddingY='3vh'
                    minWidth={ 500 }
                    maxHeight={ 500 }
                    height='100%'
                    >
                    <TextIlineBlock style={{ wordSpacing: '1px', lineHeight: 1.5 }} letterSpacing={0} >
                    I see you can’t recover your state. I have no choice but to offer you to reset your current identity and create the new one. Remember, all your state will gone forever, if you don’t have a backup. 
                    </TextIlineBlock>
                    <Pane width='80%' display='flex' flexDirection='column' justifyContent='center' height='100%' marginBottom='6%'>
                        <Pane width='100%' marginBottom='6%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                New password
                            </Text>
                            <TextInputError />
                        </Pane>
                        <Pane width='100%'>
                            <Text
                              marginBottom='3%'
                              display='inline-block'
                              fontSize='1.12rem'
                              color='#fff'
                            >
                                Confirm new password
                            </Text>
                            <TextInputError />
                        </Pane>
                    </Pane>
                </Card>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>
                    Reset identity
                </ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);