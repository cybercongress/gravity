import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { storiesOf } from '@storybook/react';
// import { getTransaction } from '../../redux/wallet';
// import ScrollContainer from '../../components/ScrollContainer/ScrollContainer';
import { MainContainer, PageTitle, JsonView, ScrollContainer, } from '../..';
import Application from '../Application/Application';

class TransactionView extends Component {
    // componentDidMount() {
    //     const { props } = this;
    //     const { params: { txHash } } = props;

    //     props.getTransaction(txHash);
    // }

    render() {
        const { transaction, receipt } = this.props;

        return (
            <ScrollContainer>
            <MainContainer>
                <PageTitle>transaction</PageTitle>
                <JsonView data={ transaction } />
                <JsonView data={ receipt } />
            </MainContainer>
            </ScrollContainer>
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
    <Application>
        <TransactionView transaction={txHash}  receipt={txHash}/>
    </Application>
))

