import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ClickOutside from 'react-click-outside';
import { CybLink } from '../..';
import IdBarComponent, {
    SettingsLink,
    CurrentUser,
} from '../IdBar/IdBar';
// import { toggleMenu } from '../../redux/appMenu';
// import { getDefaultAccountBalance } from '../../redux/wallet';
// import { getDefaultAccountBalance as getDefaultAccountBalanceCyb } from '../../redux/cyber';


class IdBar extends Component {
    state = {
        open: false,
    };

    toggle = () => {
        const { open } = this.state;

        this.setState({
            open: !open,
        });
    };

    favoriteClick = (e) => {
        const { props } = this;

        e.preventDefault();
        props.toggleMenu();
    }

    close = () => {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;
        const {
            defaultEthAccount,
            defaultCyberAccount,
            defaultAccountBalance,
            defaultAccountBalanceCyb,
        } = this.props;

        return (
            <IdBarComponent>
                <div onClickOutside={ this.close }>
                    <CurrentUser
                      defaultEthAccount={ defaultEthAccount }
                      defaultCyberAccount={ defaultCyberAccount }
                      toggle={ this.toggle }
                      open={ open }
                      favoriteClick={ this.favoriteClick }
                      ethBalance={ defaultAccountBalance }
                      cybBalance={ defaultAccountBalanceCyb }
                    />
                </div>
                {defaultEthAccount && <SettingsLink />}
                {defaultEthAccount && <CybLink defaultAccount={defaultEthAccount} dura='txq.cyb'>txq</CybLink>}
            </IdBarComponent>
        );
    }
}

export default IdBar;

// export default connect(
//     state => ({
//         defaultEthAccount: state.wallet.defaultAccount,
//         defaultCyberAccount: state.cyber.defaultAccount,
//         defaultAccountBalance: getDefaultAccountBalance(state),
//         defaultAccountBalanceCyb: getDefaultAccountBalanceCyb(state),
//     }),
//     { toggleMenu },
// )(IdBar);
