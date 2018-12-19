import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import CircleLable from './CricleLable';

storiesOf('Progressbar', module)
  .addDecorator(centered)
  .add('CircleLable', () => <CircleLable number="1" text="Registry initialization" />);
