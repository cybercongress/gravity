import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import WideInput from './WideInput';

storiesOf('WideInput', module)
  .addDecorator(centered)
  .add('WideInput', () => <WideInput placeholder="Name" defaultValue="" />);
