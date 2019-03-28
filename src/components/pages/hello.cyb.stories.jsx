import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    ThatYouSlave,
    WelcomeNewWorld,
    MatrixEverywhere,
    LastChance,
    GeneratedSecure,
    ConnectionPages,
    SecurityImportSettingsPages,
    SecurityCreatePasswordPages,
    StartCybPages,
    CardWalletPages,
    CardWalletPagesBackUpMnemonic,
    ImportAccountPages,
    ImportAccountShowMnemonic,
    GetOffTheMatrix,
    UserChoice,
    SuccessfulLogin,
    FailLogin,
} from '../..';

storiesOf('Hello', module)
    .add('ThatYouSlave', () => <ThatYouSlave />)
    .add('WelcomeNewWorld', () => <WelcomeNewWorld />)
    .add('MatrixEverywhere', () => <MatrixEverywhere />)
    .add('LastChance', () => <LastChance />)
    .add('GeneratedSecure', () => <GeneratedSecure />)
    .add('ConnectionPages', () => <ConnectionPages status='local' />)
    .add('SecurityPages', () => <SecurityImportSettingsPages />)
    .add('SecurityPagesPassword', () => <SecurityCreatePasswordPages />)
    .add('StartCybPages', () => <StartCybPages />)
    .add('CardWalletPages', () => <CardWalletPages />)
    .add('CardWalletPagesBackUpMnemonic', () => <CardWalletPagesBackUpMnemonic />)
    .add('ImportAccountPages', () => <ImportAccountPages />)
    .add('ImportAccountShowMnemonic', () => <ImportAccountShowMnemonic />)
    .add('GetOffTheMatrix', () => <GetOffTheMatrix />)
    .add('UserChoice', () => <UserChoice />)
    .add('SuccessfulLogin', () => <SuccessfulLogin />)
    .add('FailLogin', () => <FailLogin />);
