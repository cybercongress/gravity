import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import {
    MenuPopup,
    MenuPopupItem,
    MenuSeparator,
    MenuPopupAccountIcon,
    MenuPopupTransferIcon,
    MenuPopupDeleteIcon,
    MenuPopupEditIcon,
} from '../..';
import { DbMenuPoints } from './DbMenuPoints';

storiesOf('commponents/DbMenu', module)
    .addDecorator(centered)
    .add('DbMenuPoints', () => (
        <DbMenuPoints>
            <MenuPopup>
                <MenuPopupItem icon={ <MenuPopupAccountIcon /> }>Transfer Ownership</MenuPopupItem>
                <MenuSeparator />
                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>Fund Registry</MenuPopupItem>
                <MenuPopupItem icon={ <MenuPopupTransferIcon /> }>Claim Funds</MenuPopupItem>
                <MenuSeparator />
                <MenuPopupItem icon={ <MenuPopupDeleteIcon /> }> Delete Registry </MenuPopupItem>
                <MenuPopupItem icon={ <MenuPopupEditIcon /> }> Delete Registry </MenuPopupItem>
            </MenuPopup>
        </DbMenuPoints>
    ));
