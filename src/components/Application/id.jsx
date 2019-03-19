import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/settings';
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
    StateCybTable,
    Eth,
    GCyb,
} from '../..';
import {
    Pane,
    Text,
    Card,
} from 'evergreen-ui';

const CybMatrix = require('./Hello/cyb.png');
const cybRed = require('./Hello/cyb-red.png');
const cybEye = require('./Hello/eye.jpg');
const cybEye2 = require('./Hello/cybEye2.png');
const idrobot = require('./Hello/idrobot.png');
const imgEth = require('./AppMenu/eth.svg');

import { BntGroupFull } from './Hello/btn.group.full';

export const FollowYourWeb3 = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
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
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
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
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
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
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
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

export const StateCyb = () => (
    <HelloContainer>
        <HelloContainerLeftCol>
            <BigImg srcBigImg={ idrobot } />
        </HelloContainerLeftCol>
        <HelloContainerRightCol bntGroup={ <BntGroupFull /> }>
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