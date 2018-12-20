import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { addDecorator } from '@storybook/react';
import { Table } from './index';
import { TableRow } from './TableRow';
import { TableItem } from './TableItem';
import WideInput from '../newregistry/WideInput/WideInput';
import { RemoveButton } from '../newregistry';
import { LinkHash } from '../..';

storiesOf('Table', module)
  // .addDecorator(centered)
  .add('table', () => (
    <Table>
      <TableRow>
        <TableItem>
          <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618" />
        </TableItem>
        <TableItem>1</TableItem>
        <TableItem>1 %</TableItem>
        <TableItem>
          <RemoveButton />
        </TableItem>
      </TableRow>
      <TableRow>
        <TableItem>
          <LinkHash noCopy noPadding value="0x000F3754f028c704FDCe4e8ab9aAdba220f39618" />
        </TableItem>
        <TableItem>2</TableItem>
        <TableItem>50 %</TableItem>
        <TableItem>
          <RemoveButton />
        </TableItem>
      </TableRow>
    </Table>
  ));
