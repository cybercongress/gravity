import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import {
    Button,
    Input,
    MainContainer,
    FlexContainer,
    FlexContainerLeft,
    FlexContainerRight,
    Section,
    SectionContent,
    Control,
    PageTitle,
    FormControl,
    ScrollContainer,
    ConnectCyb,
} from '../..';
import { SettingsIndicator } from '../Indicator/Indicator';
import Application from '../Application/Application';

storiesOf('Examples/id', module)

    .add('connect.cyb', () => (
        <Application>
            <ConnectCyb
                IPFS_END_POINT='0.0.0.0'
                PARITY_END_POINT='http://localhost'
                CYBERD_END_POINT='http://localhost'
                CYBERD_WS_END_POINT='http://localhost'
                ipfsStatus='local'
                parityStatus='fail'
                cyberdStatus='local'
                resetAllSettings
                ipfsWriteUrl='http://localhost'
            />
        </Application>
    ));
