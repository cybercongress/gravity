import React, { Component } from 'react';
// import connect from 'react-redux/es/connect/connect';
import { Message, Input, Button, Control, Block, BlockRow } from '../..';
// import { changePassword } from '../../redux/wallet';

export class ChangePassword extends Component {

    state = {
        notification: null,
    };

    hideNotification = () => {
        this.setState({
            notification: null,
        });
    };

    setNotification = (type, message) => {
        this.setState({
            notification: {
                type: type,
                message: message,
            },
        });
    };

    changePassword = () => {
        const { password } = this.props;

        const currentPassword = this.currentPassword.value;
        const newPassword = this.newPassword.value;
        const confirmPassword = this.confirmPassword.value;

        if (password !== currentPassword) {
            this.setNotification('error', 'Incorrect current password');
            return;
        }

        if (newPassword !== confirmPassword) {
            this.setNotification('error', 'New passwords do not match');
            return;
        }

        this.props.changePassword(newPassword);
        this.setNotification('success', 'Password successfully changed');
    };

    render() {
        const { notification } = this.state;

        return (
            <Block style={ { width: 500 } }>
                { notification &&
                    <BlockRow key={notification.message}>
                        <Message type={notification.type}>{notification.message}</Message>
                    </BlockRow>
                }
                <BlockRow key='currentPassword'>
          
                        <Control textWidth={100} title='Current password'>
                            <Input type='password' inputRef={ node => this.currentPassword = node } onClick={this.hideNotification} />
                        </Control>
                   
                </BlockRow>
                <BlockRow key='newPassword'>
                <Control textWidth={100} title='New password'>
                    <Input type='password' inputRef={ node => this.newPassword = node } onClick={this.hideNotification} />
                </Control>
                   
                </BlockRow>
                <BlockRow key='confirmPassword'>
                <Control  textWidth={100} title='Confirm new password'>
                <Input type='password' inputRef={ node => this.confirmPassword = node } onClick={this.hideNotification} />
                </Control>

                </BlockRow>
                <BlockRow>
                    <div style={ {
                        display: 'flex',
                        justifyContent: 'space-between',
                    } }
                    >
                        <Button onClick={ this.changePassword } color='green'>Change password</Button>
                    </div>
                </BlockRow>
            </Block>
        );
    }
}

// export default connect(state => ({
//     password: state.wallet.password,
// }), { changePassword })(ChangePassword);
