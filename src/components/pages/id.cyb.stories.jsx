import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    FollowYourWeb3,
    IdCyb,
    KeysCyb,
    ConnectCyb,
    ShieldCyb,
    StateCyb,
    SuccessfulLogin,
    FailLogin,
} from '../..';

storiesOf('Id', module)
    .add('FollowYourWeb3', () => <FollowYourWeb3 />)
    .add('IdCyb', () => <IdCyb />)
    .add('KeysCyb', () => <KeysCyb />)
    .add('ConnectCyb', () => <ConnectCyb />)
    .add('ShieldCyb', () => <ShieldCyb />)
    .add('StateCyb', () => <StateCyb />)
    .add('SuccessfulLogin', () => <SuccessfulLogin />)
    .add('FailLogin', () => <FailLogin />);
