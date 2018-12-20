import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import {
  MenuPopup,
  MenuPopupItem,
  MenuSeparator,
  MenuPopupEditIcon,
  MenuPopupDeleteIcon,
  MenuPopupPauseIcon,
  MenuPopupResumeIcon,
  MenuPopupTransfertIcon,
  MenuPopupDeletePensilIcon,
} from './MenuPopup';

storiesOf('MenuPopup', module)
  .addDecorator(centered)
  .add('MenuPopup', () => (
    <MenuPopup>
      <MenuPopupItem icon={<MenuPopupTransfertIcon />}>Transfer Ownership</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Fee</MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupPauseIcon />}>Pause Regisrty</MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupResumeIcon />}>Resume Registry</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
    </MenuPopup>
  ))
  .add('MenuPopup_v2', () => (
    <MenuPopup>
      <MenuPopupItem icon={<MenuPopupTransfertIcon />}>Transfer Ownership</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupDeletePensilIcon />}> Delete Registry </MenuPopupItem>
    </MenuPopup>
  ));
 
