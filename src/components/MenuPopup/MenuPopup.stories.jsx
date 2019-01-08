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
  MenuPopupTransferIcon,
  MenuPopupDeletePencilIcon,
  ItemLinkHash,
  MenuPopupLinkHash,
} from './MenuPopup';

import { LinkHash } from '../..';

storiesOf('commponents/MenuPopup', module)
  .addDecorator(centered)
  .add('MenuPopup', () => (
    <MenuPopup>
      <MenuPopupItem icon={<MenuPopupTransferIcon />}>Transfer Ownership</MenuPopupItem>
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
      <MenuPopupItem icon={<MenuPopupTransferIcon />}>Transfer Ownership</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
      <MenuSeparator />
      <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
      <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}> Delete Registry </MenuPopupItem>
    </MenuPopup>
  ))

  .add('MenuPopup_LinckHach', () => (
    <MenuPopupLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
      <ItemLinkHash><LinkHash value="0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef" /></ItemLinkHash>
    </MenuPopupLinkHash>
  ));

