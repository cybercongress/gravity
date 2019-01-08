import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { AddNewRecordButton, ButtonIcon, } from './button';

storiesOf('commponents/Button', module)
  .addDecorator(centered)
  .add('AddNewRecordButton', () => (
      <AddNewRecordButton icon={<ButtonIcon />}>
        Add New Record
      </AddNewRecordButton>
  ));