import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import CircleLable from './CricleLable';
import { ProgressBar } from './ProgressBar';
import { Text, PopupBar, PopupBarFooter, Button } from "../..";

storiesOf('commponents/Progressbar', module)
  .addDecorator(centered)
  .add('ProgressBarV2', () => (
    <ProgressBar>
      <CircleLable type="complete" number="1" text="Registry initialization" />
      <CircleLable type="edit" number="1" text="Registry initialization" />
      <CircleLable number="1" text="Registry initialization" />
    </ProgressBar>
  ))

  .add('CircleLable', () => (
    <ProgressBar>
      <CircleLable number="1" text="Registry initialization" />
      <CircleLable number="1" text="Registry initialization" />
    </ProgressBar>
  ))

  .add('ProgressBar with popup', () => (
    <ProgressBar>
      <CircleLable type="complete" number="1" text="Registry initialization">
      </CircleLable>
      <CircleLable type="edit" number="1" text="Registry initialization" />
      <CircleLable number="1" text="Registry initialization">
        <PopupBar>
          <Text lineheight>To operate with records, please, define schema</Text>
          <PopupBarFooter>
              <Button transparent style={{color: '#b00020'}}>complete step</Button>
          </PopupBarFooter>
        </PopupBar>
      </CircleLable>
    </ProgressBar>
  ));
