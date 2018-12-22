import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import ValueInput from './index';

storiesOf('ValueInput', module)
  .addDecorator(centered)
  .add('ValueInput', () => (
      <ValueInput onInter={this.claimDatabase} buttonLable="claim funds" color="second" />
  ));
