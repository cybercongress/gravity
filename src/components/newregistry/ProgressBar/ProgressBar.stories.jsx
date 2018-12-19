import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import CircleLable from './CricleLable';
import CircleLableLine from './CricleLableLine';
import { ProgressBar } from './ProgressBar';

storiesOf('Progressbar', module)
  .addDecorator(centered)
  .add('ProgressBar', () => (
    <ProgressBar>
      <CircleLable number="1" text="Registry initialization" />
      <CircleLableLine number="2" text="Registry initialization" />
      <CircleLableLine number="3" text="Registry initialization" />
    </ProgressBar>
  ))

  .add('CircleLable', () => <CircleLable number="1" text="Registry initialization" />)

  .add('CircleLableLine', () => <CircleLableLine number="2" text="Registry initialization" />);
