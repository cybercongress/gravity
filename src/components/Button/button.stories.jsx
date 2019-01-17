import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { AddNewRecordButton, Button } from '../..';

storiesOf('commponents/Button', module)
    .addDecorator(centered)
    .add('AddNewRecordButton', () => (
        <AddNewRecordButton>
          Add New Record
        </AddNewRecordButton>
    ))
    .add('ButtonDefault', () => (
        <Button>
          Default
        </Button>
    ))

    .add('ButtonRed', () => (
        <Button color='red'>
          Reject
        </Button>
    ))

    .add('ButtonCancel', () => (
        <Button color='cancel'>
          cancel
        </Button>
    ))

    .add('ButtonCreen', () => (
        <Button color='green'>
          confirm
        </Button>
    ))
    .add('ButtonBlue', () => (
        <Button color='blue'>
          next
        </Button>
    ))

    .add('ButtonGreenYellow', () => (
        <Button transformtext color='greenyellow'>
          Link it!
        </Button>
    ))

    .add('ButtonOgange', () => (
        <Button transformtext color='ogange'>
          Link it!
        </Button>
    ))

    .add('ButtonOutline', () => (
        <Button outline>
          outline
        </Button>
    ))

    .add('ButtonDisabled', () => (
        <Button disabled>
          disabled
        </Button>
    ))

    .add('ButtonTransparent', () => (
        <Button transparent style={ { color: '#b00020' } }>
            complete step
        </Button>
    ))

    .add('ActionLink', () => (
      <Button to={ `/databases/` }>
        ActionLink
      </Button>
  ))

  .add('ActionLinkRed', () => (
    <Button color='red' to={ `/databases/` }>
        reject
    </Button>
))

.add('ActionLinkBlue', () => (
  <Button color='blue' to={ `/databases/` }>
      next
  </Button>
));
