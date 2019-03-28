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

// const CybMatrix = require('./cyb.png');
const CybMatrix = require('./cyb_animation.gif');
const cybRed = require('./cyb-red.png');
const cybEye = require('./eye.jpg');
const cybEye2 = require('./cybEye2.png');
const idrobot = require('./idrobot.png');
const imgEth = require('../AppMenu/eth.svg');

export const Eth = () => (
    <Pane width={ 32 } height={ 32 }>
        <img src={ imgEth } />
    </Pane>
);

export const GCyb = () => (
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

export const BntGroup = () => (
    <Pane display='flex' flexDirection='column'>
        <ToolTip
            //   left={0}
            //   top={0}
          top={ 0 }
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={ 200 }
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
          top={ 0 }
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={ 200 }
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
          top={ 0 }
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={ 200 }
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
          top={ 0 }
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={ 200 }
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
          top={ 0 }
          right='100%'
          content={ (
              <Pane
                paddingX={ 10 }
                paddingY={ 10 }
                display='flex'
                flexDirection='column'
                alignItems='center'
                width={ 200 }
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

export class PaneBalance extends React.Component {
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

export const HelloCardAccaunt = () => (
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

export const HelloContainer = ({ children, ...props }) => (
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

export const HelloContainerLeftCol = ({ children }) => (
    <Pane
        //  float='left'
      width='calc((100% - 20px * 2) / 2)'
      height='inherit'
      paddingX={ 20 }
        //   marginX={ 30 }
    >
        {children}
    </Pane>
);

export const HelloContainerRightCol = ({ children, bntGroup }) => (
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
      paddingX={ 20 }
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
            <Pane
              position='fixed'
              right='3%'
              top={ 0 }
              height='100vh'
              display='flex'
              alignItems='center'
            >
                {bntGroup}
                {/* <BntGroup /> */}
            </Pane>
        )}
    </Pane>
);

export const HelloContainerRightColContent = ({ children }) => (
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

export const HelloContainerRightColBtn = ({ children, center, ...props }) => (
    <Pane
      width='100%'
      { ...props }
      display='flex'
      justifyContent={ center ? 'center' : 'space-between' }
    >
        {children}
    </Pane>
);

export const BigImg = ({ srcBigImg }) => (
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

export const SlallImgText = ({ imgCyb, children }) => (
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

export const ButtonEverGreen = ({ children, custonClass, ...props }) => (
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

export const TextIlineBlock = ({ children, ...props }) => (
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

export const TextAreaImportMnemonic = () => (
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

export const TerminalCyb = () => (
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

export const ConnectionTable = ({
    ipfsStatus,
    cyberdStatus,
    parityStatus,
    IPFS_END_POINT,
    ipfsWriteUrl,
    CYBERD_END_POINT,
    CYBERD_WS_END_POINT,
    PARITY_END_POINT,
}) => (
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
                                ipfsStatus == 'local'
                                    ? 'green'
                                    : ipfsStatus == 'fail'
                                    ? 'red'
                                    : 'yellow'
                            }
                        />
                        <Text>IPFS read</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ IPFS_END_POINT } width='80%' />
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
                        <TextInput defaultValue={ ipfsWriteUrl } width='80%' />
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
                                parityStatus == 'local'
                                    ? 'green'
                                    : parityStatus == 'fail'
                                    ? 'red'
                                    : 'yellow'
                            }
                        />
                        <Text>Ethereum HTTP</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ PARITY_END_POINT } width='80%' />
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
                        <TextInput defaultValue={ CYBERD_END_POINT } width='80%' />
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
                                cyberdStatus == 'local'
                                    ? 'green'
                                    : cyberdStatus == 'fail'
                                    ? 'red'
                                    : 'yellow'
                            }
                        />
                        <Text>Cyberd Ws</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ CYBERD_WS_END_POINT } width='80%' />
                    </Table.TextCell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Pane>
);

export const StateCybTable = () => (
    <Pane width='100%'>
        <Table>
            <Table.Head>
                <Table.TextHeaderCell flexGrow={ 6 }>Component</Table.TextHeaderCell>
                <Table.TextHeaderCell textAlign='center' flexGrow={ 1 }>
                    Export
                </Table.TextHeaderCell>
            </Table.Head>
            <Table.Body style={ { backgroundColor: '#fff', overflowY: 'hidden' } }>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={ 20 } flexGrow={ 6 }>
                        <Text>tx.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={ 1 }>
                        <Pane width='100%' display='flex' justifyContent='center'>
                            <Checkbox />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={ 20 } flexGrow={ 6 }>
                        <Text>path.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={ 1 }>
                        <Pane width='100%' display='flex' justifyContent='center'>
                            <Checkbox checked />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={ 20 } flexGrow={ 6 }>
                        <Text>root.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={ 1 }>
                        <Pane width='100%' display='flex' justifyContent='center'>
                            <Checkbox />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={ 20 } flexGrow={ 6 }>
                        <Text>connect.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={ 1 }>
                        <Pane width='100%' display='flex' justifyContent='center'>
                            <Checkbox checked />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable>
                    <Table.TextCell paddingX={ 20 } flexGrow={ 6 }>
                        <Text>pins.cyb</Text>
                    </Table.TextCell>
                    <Table.TextCell flexGrow={ 1 }>
                        <Pane width='100%' display='flex' justifyContent='center'>
                            <Checkbox />
                        </Pane>
                    </Table.TextCell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Pane>
);

export const TextInputError = ({ isInvalid, message, ...props }) => (
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
                        { message ? message : "Passwords don't mutch"}
                    </Text>
                </Pane>
            </Pane>
        )}
    </Pane>
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
                    <Pane
                      width='100%'
                      display='flex'
                      flexDirection='column'
                      alignItems='flex-center'
                    >
                        <TextIlineBlock
                          style={ { wordSpacing: '1px', lineHeight: 1.5 } }
                          marginBottom={ 5 }
                        >
                            Welcome back, xhipster.
                        </TextIlineBlock>
                        <TextIlineBlock style={ { wordSpacing: '1px' } }>
                            Please, unlock your state.
                        </TextIlineBlock>
                    </Pane>
                    <Pane
                      width='80%'
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      height='100%'
                      marginBottom='6%'
                    >
                        <Pane width='100%' marginBottom='6%'>
                            <TextInputError />
                        </Pane>
                    </Pane>
                </Card>
            </HelloContainerRightColContent>
            <HelloContainerRightColBtn center>
                <ButtonEverGreen>Unlock</ButtonEverGreen>
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
                    <TextIlineBlock
                      style={ { wordSpacing: '1px', lineHeight: 1.5 } }
                      letterSpacing={ 0 }
                    >
                        I see you can’t recover your state. I have no choice but to offer you to
                        reset your current identity and create the new one. Remember, all your state
                        will gone forever, if you don’t have a backup.
                    </TextIlineBlock>
                    <Pane
                      width='80%'
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      height='100%'
                      marginBottom='6%'
                    >
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
                <ButtonEverGreen>Reset identity</ButtonEverGreen>
            </HelloContainerRightColBtn>
        </HelloContainerRightCol>
    </HelloContainer>
);
