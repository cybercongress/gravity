import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import {
    Table,
    Pane,
    IconButton,
    Menu,
    Popover,
    Dialog,
    Text,
    TextInput,
    Pill,
} from 'evergreen-ui';
import moment from 'moment';
import {
    PageTitle, CybLink, TableCybLink, MainContainer, Hash, ScrollContainer,
} from '../..';
// import { connect } from 'react-redux';
import Application from '../Application/Application';

// import { getTransactions, resend } from '../../redux/wallet';
// import CybLink from '../../Molecules/CybLink';

// import { Hash } from './TxQueue/TxQueue';
// import ScrollContainer from '../../Molecules/ScrollContainer/ScrollContainer';
// import  from '../../Molecules/Table/Table';

class TxQueue extends Component {
    // componentDidMount() {
    //     this.props.getTransactions(this.props.defaultAccount);
    // }

    resend = (txHash) => {
        this.props.resend(txHash);
    };

    render() {
        const { transactions } = this.props;

        const rows = transactions.map((item, index) => (
            <Table.Row borderBottom='none' isSelectable key={ index }>
                <Table.TextCell width={ 32 } flex='none'>
                    <Pill
                      height={ 7 }
                      width={ 7 }
                      borderRadius='50%'
                      paddingX={ 0 }
                      isSolid
                      color={
                            item.status == 'local'
                                ? 'green'
                                : item.status == 'fail'
                                ? 'red'
                                : 'yellow'
                        }
                    />
                    {' '}
                </Table.TextCell>
                <Table.TextCell textTransform='uppercase'>
                    <span style={ { color: '#fff', fontSize: 16 } }>{item.type}</span>
                </Table.TextCell>
                <Table.TextCell flexGrow={ 3 }>
                    {item.type === 'eth' ? (
                        <CybLink style={ { color: '#4a90e2' } } dura={ `${item.txHash}.eth` }>
                            <Hash style={ { width: '100%' } }>{item.txHash}</Hash>
                        </CybLink>
                    ) : (
                        <Hash style={ { width: '100%', color: '#fff' } }>{item.txHash}</Hash>
                    )}
                </Table.TextCell>
                <Table.TextCell textAlign='end'>
                    <span style={ { color: '#fff', fontSize: 16 } }>
                        {moment(item.date).format('D/MM YYYY h:mm:ss')}
                    </span>
                </Table.TextCell>
                <Table.TextCell width={ 66 } flex='none'>
                    <Pane paddingY={ 5 } paddingX={ 5 } width='100%'>
                        {item.status != 'local' && item.status != 'fail' && (
                            <IconButton
                              appearance='minimal'
                              className='icon-btn color-white-svg'
                              icon='refresh'
                            />
                        )}
                    </Pane>
                </Table.TextCell>
            </Table.Row>
        ));

        return (
            <ScrollContainer>
                <MainContainer>
                    <Table>
                        <Table.Head
                          style={ { backgroundColor: '#000', borderBottom: '1px solid #ffffff80' } }>
                            <Table.TextCell width={ 32 } flex='none' />
                            <Table.TextHeaderCell>
                                <span style={ { color: '#fff', fontSize: 16 } }>Type</span>
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell flexGrow={ 3 }>
                                <span style={ { color: '#fff', fontSize: 17 } }>Hash</span>
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell textAlign='end'>
                                <span style={ { color: '#fff', fontSize: 17 } }>Date</span>
                            </Table.TextHeaderCell>
                            <Table.TextCell flex='none' width={ 66 } />
                        </Table.Head>
                        <Table.Body style={ { backgroundColor: '#000', overflowY: 'hidden' } }>
                            {rows}
                        </Table.Body>
                    </Table>
                </MainContainer>
            </ScrollContainer>
        );
    }
}

// export default connect(
//     state => ({
//         transactions: state.wallet.transactions,
//         defaultAccount: state.wallet.defaultAccount,
//     }),
//     {
//         getTransactions,
//         resend,
//     },
// )(TxQueue);

const txHash = [
    {
        type: 'eth',
        txHash: '0x2d4a497622c0304d6654e8e0f5b2105e0891d1220afeff59c524aec9ad07cc0e',
    },
    {
        type: 'cyb',
        txHash: '0x2d4a497622c0304d6654e8e0f5b2105e0891d1220afeff59c524aec9ad07cc0e',
        status: 'local',
    },
    {
        type: 'eth',
        txHash: '0x2d4a497622c0304d6654e8e0f5b2105e0891d1220afeff59c524aec9ad07cc0e',
        status: 'fail',
    },
    {
        type: 'cyb',
        txHash: '0x2d4a497622c0304d6654e8e0f5b2105e0891d1220afeff59c524aec9ad07cc0e',
        status: 'remote',
    },
];

storiesOf('Examples/id', module).add('tx.cyb', () => (
    <Application>
        <TxQueue transactions={ txHash } />
    </Application>
));
