import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import {AddNewRecordButton} from './button';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('AddNewRecordButton', () => (
      <AddNewRecordButton>
        Add New Record
      </AddNewRecordButton>
  ));