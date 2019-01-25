import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    Block,
    BlockRow,
    Control,
} from '../..';

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
                    <Control title='Recipient Address'> 
                        <Input 
                            valid={addressValid} 
                            errorMessage='incorrect ETH address' 
                            value={address} 
                            onChange={this.updateAddress} 
                        />
                    </Control>

                </BlockRow>
                <BlockRow>
                    <Control title='Amount'> 
                        <Input 
                            value={amount} 
                            onChange={this.updateAmount} 
                        />
                    </Control>
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

