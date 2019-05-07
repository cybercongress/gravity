import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    FollowYourWeb3,
    IdCyb,
    KeysCyb,
    ConnectCyb,
    ShieldCyb,
    StateCyb,
} from '../..';

const CybMatrix = require('../Application/Hello/img/cyb_animation.gif');

storiesOf('Examples/id', module)
    .add('FollowYourWeb3', () => <FollowYourWeb3 img={ CybMatrix } />)
    .add('id.cyb', () => <IdCyb />)
    .add('keys.cyb', () => <KeysCyb />)
    .add('connect.cyb', () => <ConnectCyb />)
    .add('shield.cyb', () => <ShieldCyb />)
    .add('state.cyb', () => <StateCyb />);
