import React from 'react';
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
} from '../..';

const CybMatrix = require('../Application/Hello/img/cyb_animation.gif');
const cybRed = require('../Application/Hello/img/cyb-red.png');
const cybEye = require('../Application/Hello/img/eye.jpg');
const cybEye2 = require('../Application/Hello/img/cybEye2.png');

storiesOf('Examples/hello', module)
    .add('1a', () => <StartCybPages img={ CybMatrix } />)
    .add('2', () => <MatrixEverywhere img={ CybMatrix } />)
    .add('3a', () => <ThatYouSlave img={ CybMatrix } />)
    .add('3b', () => <ImportAccountPages img={ cybEye } />)
    .add('4a', () => <LastChance img={ CybMatrix } />)
    .add('4b', () => <CardWalletPages img={ cybEye } />)
    .add('5aa', () => <WelcomeNewWorld img={ cybEye } />)
    .add('5ab', () => <UserChoice img={ CybMatrix } />)
    .add('5ac', () => <GeneratedSecure img={ cybEye } />)
    .add('6a', () => <CardWalletPagesBackUpMnemonic img={ cybEye2 } />)
    .add('7a', () => <ImportAccountShowMnemonic img={ cybEye2 } />)
    .add('8', () => <SecurityCreatePasswordPages img={ cybRed } />)
    .add('9', () => <SecurityImportSettingsPages img={ cybRed } />)
    .add('10', () => <ConnectionPages status='local' img={ cybEye } />)
    .add('11', () => <GetOffTheMatrix img={ CybMatrix } />);
