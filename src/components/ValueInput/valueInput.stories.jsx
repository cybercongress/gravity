import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import ValueInput from './index';

storiesOf('Elements/ValueInput', module)
  .addDecorator(centered)
  .add('ValueInput', () => (
      <ValueInput buttonLable="claim funds" color="second" />
  ));
