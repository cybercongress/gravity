import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import{
  TableRow,
  TableItem,
  TableAddRow,
  HomeTable,
} from './Table';
import { LinkHash, Checkbox,AddButton, RemoveButton  } from '../..';

storiesOf('commponents/Table', module)
  .addDecorator(centered)
  .add('table', () => (
    <div>
      <TableRow>
        <TableItem>
          <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618" />
        </TableItem>
        <TableItem>1</TableItem>
        <TableItem>1%</TableItem>
        <TableItem>
          <RemoveButton />
        </TableItem>
      </TableRow>
      <TableRow>
        <TableItem>
          <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618" />
        </TableItem>
        <TableItem>2</TableItem>
        <TableItem>50%</TableItem>
        <TableItem>
          <RemoveButton />
        </TableItem>
      </TableRow>
    </div>
      
  ))

  .add('table_Input', () => (
      <TableAddRow>
        <input />
        <input />
        <span>100%</span>
        <AddButton />
      </TableAddRow>
  ))

  .add('table_3', () => (
    <HomeTable>
      <tbody>
        <tr>
          <td>Address</td>
          <td>address</td>
          <td>
            <Checkbox>unique</Checkbox>
          </td>
          <td>
            <RemoveButton />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>address</td>
          <td>
            <Checkbox>unique</Checkbox>
          </td>
          <td>
            <RemoveButton />
          </td>
        </tr>
      </tbody>
    </HomeTable>
  ));
