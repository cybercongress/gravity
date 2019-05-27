import React from 'react';
import {
    Button,
    Pane,
    Text,
    Icon,
    IconButton,
    Pill,
    Card,
    Textarea,
    TextInput,
    Table,
    Checkbox,
    Tooltip,
} from 'evergreen-ui';
import Terminal from 'terminal-in-react';
import {
    Avatar,
    //ToolTip,
} from '../../..';
import './media.css';

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
        <Tooltip
          position='left'
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
            <Button className='btn-group-body btn-group' />
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
        </Tooltip>
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
              width='100%'
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
    <Pane
      position='absolute'
      height='100%'
      width='100%'
      top={ 0 }
      left={ 0 }
      overflowY='auto'
      backgroundColor='#000'
      {...props}
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
            <Pane
            //  display='flex' alignItems='stretch' height='100%' flexDirection='row'
            height='100%'
            paddingX='1em'
            display='grid'
            gridTemplateColumns='1fr 1fr'
            gridGap='1em'
            >
                {children}
            </Pane>
        </Pane>
    </Pane>
);

export const HelloContainerLeftCol = ({ children }) => (
    <Pane
      //  width='calc((100% - 20px * 2) / 2)'
      width='100%'
      height='inherit'
      //  paddingX={ 20 }
    >
        {children}
    </Pane>
);

export const HelloContainerRightCol = ({ children, bntGroup }) => (
    <Pane
      display='flex'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
    //   width='calc((100% - 20px * 2) / 2)'
      height='initial'
      position='relative'
      width='100%'
    //   paddingX={ 20 }
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
      className='btn-container'
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
        <img style={ { width: '100%' } } src={ srcBigImg } />
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
        <img style={{objectFit: 'cover', width: '100%', maxWidth: 400 }} src={ imgCyb } />
        <Pane textAlign='justify' maxWidth={420}>{children}</Pane>
    </Pane>
);

export const ButtonEverGreen = ({ children, custonClass, ...props }) => (
    <Button
      whiteSpace='nowrap'
      paddingX='2em'
      height={ 42 }
      minWidth={ 150 }
      display='flex'
      justifyContent='center'
      fontSize='18px'
      borderRadius={ 3 }
      className={ custonClass || 'btn'}
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
    <Pane position='relative' display='flex' justifyContent='center' height='90%' maxHeight={ 500 } maxWidth={500} width='100%'>
        <Textarea
          height='100%'
          paddingX={ 20 }
          paddingY={ 20 }
          fontSize='18px'
          placeholder='Add trees...'
          width='100%'
          backgroundColor='#000'
          color='#fff'
          boxShadow='0 0 1px #fff'
          style={ { wordSpacing: 20, resize: 'none' } }
        />
        <Pane bottom='1%' zIndex={ 2 } left='0' position='absolute'>
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
            <Table.Head style={ { backgroundColor: '#000', borderBottom: '1px solid #ffffff80', marginBottom: 10 } }>
                <Table.TextHeaderCell><span style={{color: '#fff', fontSize: 14 }}>Provider</span></Table.TextHeaderCell>
                <Table.TextHeaderCell><span style={{color: '#fff', fontSize: 14 }}>Endpoint</span></Table.TextHeaderCell>
            </Table.Head>
            <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>
                <Table.Row isSelectable borderBottom='none'>
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
                        <Text color='#fff'>IPFS read</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ IPFS_END_POINT } backgroundColor='transparent' fontSize='18px' width='80%' className='input-green' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable borderBottom='none'>
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
                        <Text color='#fff'>IPFS write</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ ipfsWriteUrl } backgroundColor='transparent' fontSize='18px' width='80%' className='input-green' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable borderBottom='none'>
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
                        <Text color='#fff'>Ethereum HTTP</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ PARITY_END_POINT } backgroundColor='transparent' fontSize='18px' width='80%' className='input-green' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable borderBottom='none'>
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
                        <Text color='#fff'>Cyberd HTTP</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ CYBERD_END_POINT } backgroundColor='transparent' fontSize='18px' width='80%' className='input-green' />
                    </Table.TextCell>
                </Table.Row>
                <Table.Row isSelectable borderBottom='none'>
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
                        <Text color='#fff'>Cyberd Ws</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                        <TextInput defaultValue={ CYBERD_WS_END_POINT } backgroundColor='transparent' fontSize='18px' width='80%' className='input-green' />
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
          maxHeight={ 42 }
          backgroundColor='transparent'
          color='#fff'
          height='6vh'
          isInvalid={ isInvalid }
          paddingX={ 10 }
          boxShadow='inset 0 0 0px 0.4px #979797'
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
                            <TextInputError autoFocus className='input-green' />
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
                            <TextInputError className='input-green' />
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
                            <TextInputError className='input-green' />
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
