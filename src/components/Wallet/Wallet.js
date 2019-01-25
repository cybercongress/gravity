import * as React from 'react';
import PropTypes from 'prop-types';
// import { WideInput } from '@cybercongress/ui';
import './wallet.css';
// import Block, { BlockRow } from './Settings/Block';
import { Button, Input, Block, BlockRow, Text, Control } from '../..';
// import { SettingLabel } from './Settings/Settings';

const styles = require('./wallet.css');

export const WalletContainer = props => (
    <div className='WalletContainer'>
        <div { ...props } className='WalletContainer__inner' />
    </div>
);

export const Avatar = ({ hash }) => {
    return (
        <img className={styles.avatar} src={`https://robohash.org/${hash}`} />
    );
}

export const WalletAccountsList = ({
    accounts, defaultAccountAddress, setDefaultCallback, forgetCallback,
}) => accounts.map((account) => {
    const isDefaultAccount = account.address === defaultAccountAddress;

    return (
        <WalletAccount
            key={ account.address }
          address={ account.address }
            balance={ account.balance }
          clickCallback={ () => setDefaultCallback(account.address) }
            forgetCallback={ e => forgetCallback(account.address, e) }
            isDefaultAccount={ isDefaultAccount }
        />
    );
});

export const WalletAccount = ({
    address, balance, clickCallback, forgetCallback, isDefaultAccount,
}) => {
    const className = isDefaultAccount ? 'default-account' : '';

    return (
        <div className='user-card'>
            <div className='user-card__avatar'>
                <Avatar />
                <Button onClick={ clickCallback } color='yellow'>MAKE MAIN</Button>
            </div>
            <Block className={ className }>
                <BlockRow>
                Address:
                    {' '}
                    {address}
                </BlockRow>
                <BlockRow>
                Balance:
                    {' '}
                    {balance}
                </BlockRow>
                <BlockRow>
                    <Button onClick={ forgetCallback }>Remove</Button>
                </BlockRow>
            </Block>
        </div>
    );
};

export class AddAccount extends React.Component {
    _handleClick = () => {
        const inputValue = this.addAccountInput.value;

        this.props.addCallback(inputValue);
    };

    render() {
        return (
            <Block noMargin={true}>
                <BlockRow>
                    <Input inputRef={node => { this.addAccountInput = node; }} placeholder={ this.props.placeholder } />
                </BlockRow>
                <BlockRow>
                    <Button color='blue' onClick={ this._handleClick }>{this.props.addMethodName}</Button>
                </BlockRow>
            </Block>
        );
    }
}

AddAccount.propTypes = {
    addCallback: PropTypes.func,
    addMethodName: PropTypes.string,
    placeholder: PropTypes.string,
};

export class SendFunds extends React.Component {
    state = {
        addressValid: true,
        amount: 0,
        address: '',
    }
    send = () => {
        const validateAddress = this.props.validateAddress || (() => true);
        const defaultAddress = this.props.defaultAddress;
        const recipientAddress = this.state.address;
        const amount = +this.state.amount;
        const addressValid = validateAddress(recipientAddress);
        this.setState({
            addressValid,
        });
        if (addressValid) {
            this.props.sendCallback(defaultAddress, recipientAddress, amount);
        }
    };


    updateAmount = (e) => {
        const { value } = e.target;

        if ((!Number.isNaN(value) && +value >= 0) || value === '') {
            this.setState({
                amount: value,
            });
        }
    };

    updateAddress = (e) => {
        const validateAddress = this.props.validateAddress || (() => true);
        const { value } = e.target;

        this.setState({
            address: value,
            addressValid: validateAddress(value)
        });
    }

    render() {
        const { addressValid, amount, address } = this.state;
        const disabledSend = !amount || !addressValid;
        return (
            <Block noMargin={true}>
                <BlockRow>
                    <Control title='Recipient Address'> <Input valid={addressValid} errorMessage='incorrect ETH address' value={address} onChange={this.updateAddress} /></Control>
                    {/* <Text style={{ width: 160 }}>Recipient Address</Text>
                    <div style={{ width: 350, display: 'inline-block' }}>
                        
                    </div> */}
                </BlockRow>
                <BlockRow>
                    <Control title='Amount'> <Input value={amount} onChange={this.updateAmount} /></Control>
                    {/* <Text style={{ width: 160 }}>Amount</Text>
                    <div style={{ width: 350, display: 'inline-block' }}>
                        
                    </div> */}
                </BlockRow>
                <BlockRow>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={ this.cancelSend }>cancel</Button>
                        <Button disabled={disabledSend} color='green' onClick={ this.send }>send</Button>
                    </div>
                </BlockRow>
            </Block>
        );
    }
}

SendFunds.propTypes = {
    defaultAddress: PropTypes.string,
    sendCallback: PropTypes.func,
};

