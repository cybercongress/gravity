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
    TerminalCybPages,
    CardWalletPages,
    CardWalletPagesBackUpMnemonic,
    ImportAccountPages,
    ImportAccountShowMnemonic,
    GetOffTheMatrix,
    UserChoice,
    FollowYourWeb3,
    IdCyb,
    KeysCyb,
    ConnectCyb,
    ShieldCyb,
    RootCyb,
    TxCyb,
    PathCyb,
    PinsCyb,
    StateCyb,
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
    .add('TerminalCybPages', () => <TerminalCybPages />)
    .add('CardWalletPages', () => <CardWalletPages />)
    .add('CardWalletPagesBackUpMnemonic', () => <CardWalletPagesBackUpMnemonic />)
    .add('ImportAccountPages', () => <ImportAccountPages />)
    .add('ImportAccountShowMnemonic', () => <ImportAccountShowMnemonic />)
    .add('GetOffTheMatrix', () => <GetOffTheMatrix />)
    .add('UserChoice', () => <UserChoice />)
    .add('FollowYourWeb3', () => <FollowYourWeb3 />)
    .add('IdCyb', () => <IdCyb />)
    .add('KeysCyb', () => <KeysCyb />)
    .add('ConnectCyb', () => <ConnectCyb />)
    .add('ShieldCyb', () => <ShieldCyb />)
    .add('RootCyb', () => <RootCyb />)
    .add('TxCyb', () => <TxCyb />)
    .add('PathCyb', () => <PathCyb />)
    .add('PinsCyb', () => <PinsCyb />)
    .add('StateCyb', () => <StateCyb />)
    .add('SuccessfulLogin', () => <SuccessfulLogin />)
    .add('FailLogin', () => <FailLogin />);
