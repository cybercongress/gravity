import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import {
  DbMenu,
  MenuPopup,
  MenuPopupItem,
  MenuSeparator,
  MenuPopupTransferIcon,
  MenuPopupEditIcon,
  MenuPopupDeleteIcon,
  MenuPopupDeletePencilIcon,
  LinkHash,
  TableRegistry,
} from '../..';
import { DbMenuPoints } from './DbMenuPoints';

storiesOf('commponents/DbMenuPoints', module)
  .addDecorator(centered)
  .add('DbMenuPoints', () => (
    <DbMenuPoints>
      <MenuPopup>
      <MenuPopupItem icon={<MenuPopupTransferIcon />}>Transfer Ownership</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}> Delete Registry </MenuPopupItem>
    </MenuPopup>
    </DbMenuPoints>
  ));
