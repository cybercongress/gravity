import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import {
  MenuPopup,
  MenuPopupItem,
  MenuSeparator,
  MenuPopupEditIcon,
  MenuPopupDeleteIcon
} from './MenuPopup';

storiesOf('MenuPopup', module)
  .addDecorator(centered)
  .add('MenuPopup', () => (
    <MenuPopup>
      <MenuPopupItem icon={<MenuPopupEditIcon />}>dsfds</MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupEditIcon />}>dsfds</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupDeleteIcon />}> dsfds </MenuPopupItem>
      <MenuSeparator />
    </MenuPopup>
  ))
  .add('MenuPopupItem', () => <MenuPopupItem> dsfds </MenuPopupItem>)
  .add('MenuSeparator', () => <MenuSeparator />)
  .add('MenuPopupEditIcon', () => <MenuPopupEditIcon />)
  .add('MenuPopupDeleteIcon', () => <MenuPopupDeleteIcon />);
