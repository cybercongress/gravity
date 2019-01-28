import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { storiesOf } from '@storybook/react';
// import { getTransaction } from '../../redux/wallet';
// import ScrollContainer from '../../components/ScrollContainer/ScrollContainer';
import JsonView from '../JsonView/JsonView';
import { MainContainer, PageTitle } from '../..';

class TransactionView extends Component {
    // componentDidMount() {
    //     const { props } = this;
    //     const { params: { txHash } } = props;

    //     props.getTransaction(txHash);
    // }

    render() {
        const { transaction, receipt } = this.props;

        return (
            <MainContainer>
                <PageTitle>transaction</PageTitle>
                <JsonView data={ transaction } />
                <JsonView data={ receipt } />
            </MainContainer>
        );
    }
}

// export default connect(
//     state => ({
//         transaction: state.wallet.transaction,
//         receipt: state.wallet.receipt,
//     }),
//     {
//         getTransaction,
//     },
// )(TransactionView);

const txHash = [
    {
        dfss:'1adsjnald56dajsandDNDlkmsdfmkkKM',
    },
    {
        transaction: 'eth',
    },
    ];

storiesOf('cyb/pages/TransactionView', module)
.add('TransactionView', () => (
        <TransactionView transaction={txHash}  receipt={txHash}/>

))

