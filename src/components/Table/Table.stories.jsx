import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
// import Table, {
//   TableRow,
//   TableItem,
//   TableAddRow,
//   HomeTable,
// } from './Table';
import { Table, IconButton, Pane } from 'evergreen-ui';
import {
    LinkHash, Checkbox, AddButton, RemoveButton,
} from '../..';

const addRegistryItem = [
    {
        name: 'yyg',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd1',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd2',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd3',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
];

const rowsBlack = addRegistryItem.map((item, index) => (
    <Table.Row borderBottom='none' paddingLeft={ 20 } height={ 50 } isSelectable key={ index }>
        <Table.TextCell>
            <span style={ { color: '#fff', fontSize: 17 } }>
.
                {item.name}
            </span>
        </Table.TextCell>
        <Table.TextCell flexShrink={ 0 } flexGrow={ 2 }>
            <span style={ { color: '#fff', fontSize: 17 } }>{item.hash}</span>
        </Table.TextCell>
        {/* <Table.TextCell>{item.protocol}</Table.TextCell> */}
        <Table.Cell width={ 60 } flex='none'>
            {/* <Button sizeSm color='blue' onClick={ () => this.deleteRegistryItem(item.name) }> */}

            <Pane paddingY={ 5 } paddingX={ 5 } width='100%'>
                <IconButton
                  iconSize={ 12 }
                  className='icon-btn color-white-svg'
                  appearance='minimal'
                  icon='more'
                />
            </Pane>

            {/* </Button> */}
        </Table.Cell>
    </Table.Row>
));

storiesOf('Elements/Table', module)
    .add('Table', () => (
        <Pane paddingX='5em' paddingY='5em' width='100%' height='100%' backgroundColor='#000'>
            <Table>
                <Table.Head
                  style={ { backgroundColor: '#000', borderBottom: '1px solid #ffffff80' } }
                  paddingLeft={ 20 }
                >
                    <Table.TextHeaderCell>
                        <span style={ { color: '#fff', fontSize: 17 } }>Name</span>
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell flexShrink={ 0 } flexGrow={ 2 }>
                        <span style={ { color: '#fff', fontSize: 17 } }>IPFS Hash</span>
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell width={ 60 } flex='none' />
                </Table.Head>
                <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>
                    {rowsBlack}
                </Table.Body>
            </Table>
        </Pane>
    ));
