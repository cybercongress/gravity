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

storiesOf('id', module)
    .add('FollowYourWeb3', () => <FollowYourWeb3 />)
    .add('id.cyb', () => <IdCyb />)
    .add('keys.cyb', () => <KeysCyb />)
    .add('connect.cyb', () => <ConnectCyb />)
    .add('shield.cyb', () => <ShieldCyb />)
    .add('state.cyb', () => <StateCyb />);
