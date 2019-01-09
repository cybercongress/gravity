import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { AddNewRecordButton, Buttons } from '../..';

storiesOf('commponents/Buttons', module)
    .addDecorator(centered)
    .add('AddNewRecordButtons', () => (
        <AddNewRecordButton>
          Add New Record
        </AddNewRecordButton>
    ))
    .add('ButtonsDefault', () => (
        <Buttons>
          Default
        </Buttons>
    ))

    .add('ButtonsRed', () => (
        <Buttons color='red'>
          Reject
        </Buttons>
    ))

    .add('ButtonsCancel', () => (
        <Buttons color='cancel'>
          cancel
        </Buttons>
    ))

    .add('ButtonsCreen', () => (
        <Buttons color='green'>
          confirm
        </Buttons>
    ))
    .add('ButtonsBlue', () => (
        <Buttons color='blue'>
          next
        </Buttons>
    ))

    .add('ButtonsGreenYellow', () => (
        <Buttons transformtext color='greenyellow'>
          Link it!
        </Buttons>
    ))

    .add('ButtonsOgange', () => (
        <Buttons transformtext color='ogange'>
          Link it!
        </Buttons>
    ))

    .add('ButtonsOutline', () => (
        <Buttons outline>
          outline
        </Buttons>
    ))

    .add('ButtonsDisabled', () => (
        <Buttons disabled>
          disabled
        </Buttons>
    ))

    .add('ActionLink', () => (
      <Buttons to={ `/databases/` }>
        ActionLink
      </Buttons>
  ))

  .add('ActionLinkRed', () => (
    <Buttons color='red' to={ `/databases/` }>
        reject
    </Buttons>
))

.add('ActionLinkBlue', () => (
  <Buttons color='blue' to={ `/databases/` }>
      next
  </Buttons>
));
