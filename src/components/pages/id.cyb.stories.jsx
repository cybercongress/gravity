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
import Application from '../Application/Application';

const CybMatrix = require('../Application/Hello/img/cyb_animation.gif');

storiesOf('Examples/id', module)
    .add('FollowYourWeb3', () => <FollowYourWeb3 img={ CybMatrix } />)
    .add('id.cyb', () => <Application><IdCyb /></Application>)
    .add('keys.cyb', () => <Application><KeysCyb /></Application>)
    .add('connect.cyb', () => <Application><ConnectCyb /></Application>)
    .add('shield.cyb', () => <Application><ShieldCyb /></Application>)
    .add('state.cyb', () => <Application><StateCyb /></Application>);
