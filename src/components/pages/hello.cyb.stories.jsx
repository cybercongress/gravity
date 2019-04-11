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
    .add('1a', () => <StartCybPages />)
    .add('2', () => <MatrixEverywhere />)
    .add('3a', () => <ThatYouSlave />)
    .add('3b', () => <ImportAccountPages />)
    .add('4a', () => <LastChance />)
    .add('4b', () => <CardWalletPages />)
    .add('5aa', () => <WelcomeNewWorld />)
    .add('5ab', () => <UserChoice />)
    .add('5ac', () => <GeneratedSecure />)
    .add('6a', () => <CardWalletPagesBackUpMnemonic />)
    .add('7a', () => <ImportAccountShowMnemonic />)
    .add('8', () => <SecurityCreatePasswordPages />)
    .add('9', () => <SecurityImportSettingsPages />)
    .add('10', () => <ConnectionPages status='local' />)
    .add('11', () => <GetOffTheMatrix />);
