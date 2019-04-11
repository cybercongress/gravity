import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    SuccessfulLogin,
    FailLogin,
} from '../..';

storiesOf('login', module)
    .add('successful_llogin', () => <SuccessfulLogin />)
    .add('fail_login', () => <FailLogin />);
