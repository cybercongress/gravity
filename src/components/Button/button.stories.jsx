import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { AddNewRecordButton, Button } from './button';

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

    .add('ButtonReject', () => (
        <Button color='reject'>
          Reject
        </Button>
    ))

    .add('ButtonCancel', () => (
        <Button color='cancel'>
          cancel
        </Button>
    ))

    .add('ButtonConfirm', () => (
        <Button color='confirm'>
          confirm
        </Button>
    ))
    .add('ButtonNext', () => (
        <Button color='next'>
          next
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

    .add('ActionLink', () => (
      <Button to={ `/databases/` }>
        ActionLink
      </Button>
  ))

  .add('ActionLinkReject', () => (
    <Button color='reject' to={ `/databases/` }>
        reject
    </Button>
))

.add('ActionLinkNext', () => (
  <Button color='next' to={ `/databases/` }>
      next
  </Button>
));
