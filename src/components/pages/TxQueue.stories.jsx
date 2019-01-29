import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { PageTitle, CybLink, TableCybLink, MainContainer, Hash } from '../..';
// import { connect } from 'react-redux';
import moment from 'moment';
import Application from '../Application/Application';

// import { getTransactions, resend } from '../../redux/wallet';
// import CybLink from '../../components/CybLink';

// import { Hash } from './TxQueue/TxQueue';
// import ScrollContainer from '../../components/ScrollContainer/ScrollContainer';
// import  from '../../components/Table/Table';


class TxQueue extends Component {
    // componentDidMount() {
    //     this.props.getTransactions(this.props.defaultAccount);
    // }

    resend = (txHash) => {
        this.props.resend(txHash);
    }

    render() {
        const { transactions } = this.props;

        return (
            <MainContainer>
                <PageTitle>Transaction</PageTitle>
                <TableCybLink>
                    <thead>
                        <tr>
                            <th>type</th>
                            <th>hash</th>
                            <th>date</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {transactions.map(item => (
                        <tr key={item.txHash}>
                            <td>
                                {item.type}
                            </td>
                            <td>
                                {
                                    item.type === 'eth' ? (
                                        <CybLink dura={`${item.txHash}.eth`}>
                                            <Hash>{item.txHash}</Hash>
                                        </CybLink>
                                    ) : (
                                        <Hash>{item.txHash}</Hash>
                                    )
                                }                                
                            </td>
                            <td>
                                {moment(item.date).format('D/MM YYYY h:mm:ss')}
                            </td>
                            <td>
                                pending
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </TableCybLink>
            </MainContainer>
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
        txHash:'1adsjnald56dajsandDNDlkmsdfmkkKM',
    },
    {
        type: 'eth',
        txHash:'1adsjnald56dajsandDNDlkmsdfmkkKM',
    },
    ];

storiesOf('cyb/pages/TxQueue', module)
.add('TxQueue', () => (
    <Application>
       <TxQueue transactions={txHash} />
    </Application>
))

