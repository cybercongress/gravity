import React, { Component } from 'react';
import {
    BntGroup,
    HelloCardAccaunt,
    HelloContainer,
    HelloContainerLeftCol,
    HelloContainerRightCol,
    HelloContainerRightColContent,
    HelloContainerRightColBtn,
    BigImg,
    SlallImgText,
    ButtonEverGreen,
    TextIlineBlock,
    TextAreaImportMnemonic,
    TerminalCyb,
    ConnectionTable,
    TextInputError,
} from '../..';

import {
    Pane,
    Text,
    IconButton,
    Card,
    FilePicker,
} from 'evergreen-ui';

const CybMatrix = require('./Hello/cyb.png');
const cybRed = require('./Hello/cyb-red.png');
const cybEye = require('./Hello/eye.jpg');
const cybEye2 = require('./Hello/cybEye2.png');
const idrobot = require('./Hello/idrobot.png');
const imgEth = require('./AppMenu/eth.svg');

export const ConnectionPages = ({
    ipfsStatus,
    cyberdStatus,
    parityStatus,
    IPFS_END_POINT,
    PARITY_END_POINT,
    CYBERD_END_POINT,
    CYBERD_WS_END_POINT,
    ipfsWriteUrl,
}) => (
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
                <ConnectionTable
                  IPFS_END_POINT={IPFS_END_POINT}
                  PARITY_END_POINT={PARITY_END_POINT}
                  CYBERD_END_POINT={CYBERD_END_POINT}
                  CYBERD_WS_END_POINT={CYBERD_WS_END_POINT}
                  ipfsWriteUrl={ipfsWriteUrl}
                  cyberdStatus={cyberdStatus}
                  ipfsStatus={ ipfsStatus }
                  parityStatus={parityStatus}
                />
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
