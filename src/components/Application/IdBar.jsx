import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ClickOutside from 'react-click-outside';
import { CybLink } from '../..';
import {
    IdBarComponent,
    SettingsLink,
    CurrentUser,
    SkillBar,
} from '../..';
import{
    Pane,
} from 'evergreen-ui';
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
            menuItems,
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
                      menuItems={menuItems}
                    />
                </div>
                {defaultEthAccount && <SkillBar fontSize='10px' marginRight={30} style={{height: 14, maxWidth: 200 }} value={25} />}
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
