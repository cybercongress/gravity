import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    SuccessfulLogin,
    FailLogin,
} from '../..';

const CybMatrix = require('../Application/Hello/img/cyb_animation.gif');

storiesOf('Examples/login', module)
    .add('successful_llogin', () => <SuccessfulLogin img={CybMatrix} />)
    .add('fail_login', () => <FailLogin img={CybMatrix} />);
