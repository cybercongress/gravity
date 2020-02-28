import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    Block,
    BlockRow,
} from '../..';

export class AddAccount extends React.Component {
    _handleClick = () => {
        const inputValue = this.addAccountInput.value;

        this.props.addCallback(inputValue);
    };

    render() {
        return (
            <Block noMargin={true}>
                <BlockRow>
                    <Input
                        inputRef={node => { this.addAccountInput = node; }}
                        placeholder={this.props.placeholder}
                    />
                </BlockRow>
                <BlockRow>
                    <Button
                        color='blue'
                        onClick={this._handleClick}
                    >
                        {this.props.addMethodName}
                    </Button>
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