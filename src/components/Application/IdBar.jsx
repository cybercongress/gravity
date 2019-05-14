import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ClickOutside from 'react-click-outside';
import { Pane, Text } from 'evergreen-ui';
import {
    CybLink, IdBarComponent, SettingsLink, CurrentUser, SkillBar,
} from '../..';

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
    };

    close = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const {
            defaultEthAccount,
            defaultCyberAccount,
            defaultAccountBalance,
            defaultAccountBalanceCyb,
            menuItems,
        } = this.props;

        const ContentTooltip = ({ bwRemained, bwMaxValue, linkPrice }) => (
            <Pane
              minWidth={ 200 }
              paddingX={ 18 }
              paddingY={ 14 }
              borderRadius={ 4 }
              backgroundColor='#fff'
            >
                <Pane marginBottom={ 12 }>
                    <Text size={ 300 }>
                        You have
                        {' '}
                        {bwRemained}
                        {' '}
BP out of
                        {' '}
                        {bwMaxValue}
                        {' '}
BP.
                    </Text>
                </Pane>
                <Pane marginBottom={ 12 }>
                    <Text size={ 300 }>
                        Full regeneration of bandwidth points or BP happens in 24 hours.
                    </Text>
                </Pane>
                <Pane display='flex' marginBottom={ 12 }>
                    <Text size={ 300 }>
Current rate for 1 cyberlink is
                        {linkPrice}
                        {' '}
BP.
                    </Text>
                </Pane>
            </Pane>
        );

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
                      menuItems={ menuItems }
                    />
                </div>
                {defaultEthAccount && (
                    <SkillBar
                      fontSize='10px'
                      marginRight={ 30 }
                      style={ { height: 15, maxWidth: 200, minWidth: 100 } }
                      bwPercent={ 25 }
                      contentTooltip={
                          <ContentTooltip linkPrice={ 2100 } bwRemained={ 10 } bwMaxValue={ 100 } />
                        }
                    />
                )}
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
