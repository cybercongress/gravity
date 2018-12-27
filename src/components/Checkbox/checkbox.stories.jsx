import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Checkbox } from './index';

storiesOf('Checkbox', module)
  .addDecorator(centered)
  .add('checkbox', () => (
    <Checkbox>unique</Checkbox>
  ));
