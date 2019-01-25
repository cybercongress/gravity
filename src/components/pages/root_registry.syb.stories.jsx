import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
// import { connect } from 'react-redux';

// import * as actions from '../../redux/settings';
import {
    MainContainer, PageTitle, TableCybLink, Button, Input, FlexContainer, Text,
} from '../..';

class RootRegistryPage extends Component {
    addRegistryItem = () => {
        const name = this.name.value;
        const hash = this.hash.value;
        const isIpfs = !!this.refs.ipfs.checked;

        this.props.addRegistryItem(name, hash, isIpfs ? 'ipfs' : 'ipns').then(() => {
            this.name.value = '';
            this.hash.value = '';
        });
    };

    deleteRegistryItem = (itemName) => {
        this.props.deleteRegistryItem(itemName);
    };

    render() {
        const { registryItems } = this.props;

        const rows = registryItems.map(item => (
            <tr key={ item.name }>
                <td>
.
                    {item.name}
                </td>
                <td>{item.hash}</td>
                <td>{item.protocol}</td>
                <td>
                    <Button sizeSm color='blue' onClick={ () => this.deleteRegistryItem(item.name) }>
                        REMOVE
                    </Button>
                </td>
            </tr>
        ));

        return (
            <MainContainer>
                <PageTitle>Cyb root registry</PageTitle>
                <div style={ { paddingBottom: 20 } }>
                    <Button sizeSm color='blue' onClick={ this.props.resetToDefault }>
                        RESET TO DEFAULT
                    </Button>
                </div>
                <div>
                    <TableCybLink>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>hash</th>
                                <th>Protocol</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                            <tr className='addRow' key='add_row'>
                                <td>
                                    <Input
                                      inputRef={ (node) => {
                                            this.name = node;
                                        } }
                                      placeholder='name'
                                    />
                                </td>
                                <td>
                                    <Input
                                      inputRef={ (node) => {
                                            this.hash = node;
                                        } }
                                      placeholder='hash'
                                    />
                                </td>
                                <td>
                                    <FlexContainer noPadding>
                                        <Text color='black' size='lg'>ipfs</Text>
                                        <input
                                          type='radio'
                                          defaultChecked
                                          ref='ipfs'
                                          name='protocol'
                                        />
                                    </FlexContainer>

                                    <FlexContainer noPadding>
                                        <Text color='black' size='lg'>ipns</Text>
                                        <input
                                          type='radio'
                                          defaultChecked={ false }
                                          ref='ipns'
                                          name='protocol'
                                        />
                                    </FlexContainer>
                                </td>
                                <td>
                                    <Button sizeSm color='turquoise' onClick={ this.addRegistryItem }>
                                        ADD
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </TableCybLink>
                </div>
            </MainContainer>
        );
    }
}
const addRegistryItem = [
    {
        name: 'yyg',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
    {
        name: 'dfgd',
        hash: 'QmS2F1UgmYHAekcvezFLCrBibEBjJezSDqwq8fuwF5Qqvi',
        protocol: 'ipfs',
    },
];

storiesOf('cyb/pages/Root Registry', module).add('Root Registry', () => (
    <RootRegistryPage registryItems={ addRegistryItem } />
));
