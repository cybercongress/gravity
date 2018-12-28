import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import CircleLable from './CricleLable';
import { ProgressBar } from './ProgressBar';

storiesOf('Progressbar', module)
  .addDecorator(centered)
  .add('ProgressBarV2', () => (
    <ProgressBar>
      <CircleLable type="complete" number="1" text="Registry initialization" />
      <CircleLable type="edit" number="1" text="Registry initialization" />
      <CircleLable number="1" text="Registry initialization" />
    </ProgressBar>
  ))

  .add('CircleLable', () => (
    <div>
      <CircleLable number="1" text="Registry initialization" />
      <CircleLable number="1" text="Registry initialization" />
    </div>
  ));
