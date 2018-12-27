import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { DatabaseItemsContainer } from './DatabaseItemsContainer';
import { DbMenuPoints } from '../DbMenuPoints/DbMenuPoints';
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
} from '../..';

import { TableRecords } from '../TableRecords/TableRecords';

storiesOf('DatabaseItemsContainer', module)
  .addDecorator(centered)
  .add('DatabaseItemsContainer', () => (
    <DatabaseItemsContainer>
      <TableRecords>
        <thead>
          <tr>
            <th>Action</th>
            <th>Id</th>
            <th>Funded</th>
            <th>Owner</th>

            <th>Name</th>
            <th>Address</th>
            <th>Developer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DbMenuPoints>
                <MenuPopup>
                  <MenuPopupItem icon={<MenuPopupTransferIcon />}>Transfer Ownership</MenuPopupItem>
                  <MenuSeparator />
                  <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
                  <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
                  <MenuSeparator />
                  <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
                  <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}>
                    Delete Registry
                  </MenuPopupItem>
                </MenuPopup>
              </DbMenuPoints>
            </td>
            <td>1</td>
            <td>3 ETH</td>
            <td>YOU</td>
            <td>dragons</td>
            <td>
              <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
            </td>
            <td>congress</td>
          </tr>
          <tr>
            <td>
              <DbMenuPoints>
                <MenuPopup>
                  <MenuPopupItem icon={<MenuPopupTransferIcon />}>Transfer Ownership</MenuPopupItem>
                  <MenuSeparator />
                  <MenuPopupItem icon={<MenuPopupEditIcon />}>Fund Registry</MenuPopupItem>
                  <MenuPopupItem icon={<MenuPopupEditIcon />}>Claim Funds</MenuPopupItem>
                  <MenuSeparator />
                  <MenuPopupItem icon={<MenuPopupDeleteIcon />}> Delete Registry </MenuPopupItem>
                  <MenuPopupItem icon={<MenuPopupDeletePencilIcon />}>
                    Delete Registry
                  </MenuPopupItem>
                </MenuPopup>
              </DbMenuPoints>
            </td>
            <td>1</td>
            <td>3 ETH</td>
            <td>YOU</td>
            <td>dragons</td>
            <td>
              <LinkHash value="0x727b557aeec8203A8e0f3f43FD30885d94399010" />
            </td>
            <td>congress</td>
          </tr>
        </tbody>
      </TableRecords>
    </DatabaseItemsContainer>
  ));
