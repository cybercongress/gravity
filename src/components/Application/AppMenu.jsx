import React, { Component } from 'react';
// import { connect } from 'react-redux';
import ClickOutside from 'react-click-outside';
import {
    Pane, Text, Pill, TextInput, Tooltip,
} from 'evergreen-ui';
import {
    Message,
    MenuContainer,
    Bookmarks,
    LogoLink,
    AddMenuItem,
    AddMenuItemReject,
    ReportLinkContainer,
    AddMenuItemContainer,
} from '../..';
// import * as actions from '../../redux/appMenu';
const imgEth = require('./AppMenu/eth.svg');
const imggroup3= require('./AppMenu/group-3.svg');
const imginfinity2 = require('./AppMenu/infinity-2.svg');
const imgbody = require('./AppMenu/body.svg');

export const WaleetAppMenuEth = ({ ethBalance }) => (
    <Pane marginBottom={ 20 } display='flex' alignItems='center'>
        <Pane marginRight={ 13 }>
            <Text color='#fff' fontSize='24px'>
                {ethBalance}
            </Text>
        </Pane>

        <Pane display='flex' alignItems='center'>
            <Pane width={ 32 } height={ 32 }>
                <img src={ imgEth } />
            </Pane>
            <Pane width={ 32 } height={ 32 }>
                <img src={ imgEth } />
            </Pane>
        </Pane>
    </Pane>
);

export const WaleetAppMenuCyb = ({ cybBalance }) => (
    <Tooltip
      position='left'
      content={ (
          <Pane paddingY={ 16 } paddingX={ 16 }>
              <Text lineHeight={ 1.33 } fontSize='12px' color='#fff'>
                    142 76483221311 explanation of number scales
              </Text>
          </Pane>
) }
    >
        <Pane display='flex' alignItems='center'>
            <Pane marginRight={ 13 }>
                <Text color='#fff' fontSize='24px'>
                    {cybBalance}
                </Text>
            </Pane>

            <Pane display='flex' alignItems='center'>
                <Pane paddingX={ 7 }>
                    <Pill
                      height={ 7.8 }
                      width={ 7.8 }
                      borderRadius='50%'
                      paddingX={ 0 }
                      isSolid
                      boxShadow='0 0 9px 1.5px #4ed6ae'
                      backgroundColor='#36d6ae'
                    />
                </Pane>
                <Pane paddingX={ 7 }>
                    <Pill
                      height={ 7.8 }
                      width={ 7.8 }
                      borderRadius='50%'
                      paddingX={ 0 }
                      isSolid
                      boxShadow='0 0 9px 1.5px #4ed6ae'
                      backgroundColor='#36d6ae'
                    />
                </Pane>
                <Pane paddingX={ 7 }>
                    <Pill
                      height={ 7.8 }
                      width={ 7.8 }
                      borderRadius='50%'
                      paddingX={ 0 }
                      isSolid
                      boxShadow='0 0 9px 1.5px #4ed6ae'
                      backgroundColor='#36d6ae'
                    />
                </Pane>
                <Pane paddingX={ 7 }>
                    <Pill
                      height={ 7.8 }
                      width={ 7.8 }
                      borderRadius='50%'
                      paddingX={ 0 }
                      isSolid
                      boxShadow='0 0 9px 1.5px #4ed6ae'
                      backgroundColor='#36d6ae'
                    />
                </Pane>
            </Pane>
        </Pane>
    </Tooltip>
);

export const WaleetAppMenu = ({ ethBalance, cybBalance, ...props }) => (
    <Pane { ...props } flexDirection='column' alignItems='flex-start' display='flex' flexShrink={ 0 }>
        {ethBalance && <WaleetAppMenuEth ethBalance={ ethBalance } />}
        {cybBalance && <WaleetAppMenuCyb cybBalance={ cybBalance } />}
    </Pane>
);

export const UserCard = ({ ...props }) => (
    <Pane { ...props } width='100%' flexShrink={ 0 } display='flex' justifyContent='center'>
        <Pane display='flex' alignItems='center'>
            <Pane marginX={ 5 } width={ 32 } height={ 40 }>
                <img src={ imginfinity2 } />
            </Pane>
            <Pane marginX={ 5 } width={ 32 } height={ 40 }>
                <img src={ imgbody } />
            </Pane>
            <Pane marginX={ 5 } width={ 32 } height={ 40 }>
                <img src={ imggroup3 } />
            </Pane>
        </Pane>
    </Pane>
);

class AppMenu extends Component {
    addToFavorites = () => {
        const { props } = this;
        const dura = props.currentDura;
        const name = this.input.value;

        props.addMenuItem(name, dura);
        this.hideInput();
    };

    hideInput = () => {
        const { props } = this;

        props.hideInput();
    };

    rejectFavorite = () => {
        this.input.value = 'New App';
        this.hideInput();
    };

    clickLogo = () => {
        // this.props.toggleMenu();
    };

    render() {
        const { deleteMenuItem, menuItems, pendingAddToFavorites } = this.props;

        return (
            <MenuContainer>
                {/* <LogoLink onClick={ this.clickLogo } /> */}

                {/* <Message
                  style={ {
                    margin: 15,
                  } }
                  type='error'
                >
                Cyb in Ethereum Mainnet may not be secure yet. We recommend to operate accounts with small balance at your own risk.
                </Message> */}
                <WaleetAppMenu marginBottom={ 66 } ethBalance={ 17 } cybBalance={ 10 } />
                <UserCard className='opacityItems' marginBottom={ 20 } />

                {/* <Pane overflow='auto' flexGrow={1} width='100%'> */}
                <Bookmarks items={ menuItems } deleteMenuItem={ deleteMenuItem } />
                {/* </Pane> */}

                <Pane
                  width='100%'
                  paddingY={ 10 }
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  className='opacityItemsBefore'
                  flexDirection='column'
                >
                    {pendingAddToFavorites && (
                        <Pane zIndex={ 2 } onClickOutside={ this.rejectFavorite }>
                            <AddMenuItemContainer paddingBottom={ 10 }>
                                <AddMenuItem>
                                    <TextInput
                                      boxSizing='border-box'
                                      paddingRigt={ 40 }
                                      paddingLeft={ 10 }
                                      paddingY={ 10 }
                                      width='80%'
                                      fontSize='14px'
                                      backgroundColor='transparent'
                                      style={ { caretColor: '#36d6ae' } }
                                      ref={ (node) => {
                                            this.input = node;
                                        } }
                                      defaultValue='New App'
                                    />
                                    <AddMenuItemReject onClick={ this.addToFavorites } />
                                </AddMenuItem>
                            </AddMenuItemContainer>
                        </Pane>
                    )}
                    <ReportLinkContainer>
                        <a target='__blank' href='#'>
                            Files
                        </a>
                    </ReportLinkContainer>
                </Pane>
            </MenuContainer>
        );
    }
}

export default AppMenu;
// export default connect(
//     state => ({
//         dura: state.browser.dura,
//         menuItems: state.appMenu.items,
//         currentDura: state.browser.dura,
//         pendingAddToFavorites: state.appMenu.pendingAddToFavorites,
//     }),
//     actions,
// )(AppMenu);
